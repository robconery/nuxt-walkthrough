import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {  

  const body = await readBody(event);

  const email = body.email;
  const code = body.code; //randomize please

  let user = await useStorage().getItem(`user:${email}`);
  if(!user) return {success: false, message: "No user"}
  console.log(user);
  if(user.code && user.code === parseInt(code)){
    //is it expired?
    if(user.codeExpires > new Date().getTime()){
      const token = jwt.sign({id: user.id, email: user.email}, process.env.AUTH_SECRET);
      return {success: true, token: token}
    }else{
      return {success: false, message: "The code has expired"}
    }
  }else{
    return {success: false, message: "Invalid code"}
  }
});