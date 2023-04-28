import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {  
  // const email = event.context.body.email;
  // const code = event.context.body.code;

  const email = "robconery@gmail.com";
  const code = 55555; //randomize please

  let user = await useStorage().getItem(`user:${email}`);
  if(!user) return {success: false, message: "No user"}

  if(user.code && user.code === code){
    //is it expired?
    if(user.codeExpires > new Date().getTime()){
      const token = jwt.sign({id: user.id}, process.env.AUTH_SECRET);

      console.log(jwt.verify(token, process.env.AUTH_SECRET));

      return {success: true, token: token}
    }else{
      return {success: false, message: "The code has expired"}
    }
  }else{
    return {success: false, message: "Invalid code"}
  }
});