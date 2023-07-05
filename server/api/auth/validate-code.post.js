import jwt from "jsonwebtoken";
import {User} from "../../models";

export default defineEventHandler(async (event) => {  

  const body = await readBody(event);

  const email = body.email;
  const code = body.code; //randomize please

  let claim = await useStorage().getItem(`user:${email}`);
  if(!claim) return {success: false, message: "No user"}

  if(claim.code && claim.code === parseInt(code)){
    //is it expired?
    if(claim.codeExpires > new Date().getTime()){
      //get the user by email...
      const user = await User.findOrCreate({where:{email: email}});
      const token = jwt.sign({id: user.id}, process.env.AUTH_SECRET);

      return {success: true, token, gravatar: user.gravatar}
    }else{
      return {success: false, message: "The code has expired"}
    }
  }else{
    return {success: false, message: "Invalid code"}
  }
});