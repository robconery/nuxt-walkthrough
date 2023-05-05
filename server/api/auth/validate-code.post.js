import jwt from "jsonwebtoken";
import md5 from "blueimp-md5";

export default defineEventHandler(async (event) => {  

  const body = await readBody(event);

  const email = body.email;
  const code = body.code; //randomize please

  let user = await useStorage().getItem(`user:${email}`);
  if(!user) return {success: false, message: "No user"}

  if(user.code && user.code === parseInt(code)){
    //is it expired?
    if(user.codeExpires > new Date().getTime()){
      const token = jwt.sign({id: user.id, email: user.email}, process.env.AUTH_SECRET);

      const hash = md5(email.toLowerCase().trim());
      const gravatar = `https://secure.gravatar.com/avatar/${hash}?size=150`;

      return {success: true, token, gravatar}
    }else{
      return {success: false, message: "The code has expired"}
    }
  }else{
    return {success: false, message: "Invalid code"}
  }
});