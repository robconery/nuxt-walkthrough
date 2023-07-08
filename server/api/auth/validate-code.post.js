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
<<<<<<< HEAD
      const [user,thing] = await User.findOrCreate({where:{email: email}});
      const token = jwt.sign({id: user.id}, process.env.AUTH_SECRET);
      const everything = await User.getEverything(user.id);

      return {success: true, token, user: {
        id: everything.id,
        courses: everything.Courses || [],
        token
      }}
=======
      let [user,created] = await User.findOrCreate({where:{email: email}});
      //console.log(user);
      user = await User.getEverything(user.id);

      //console.log(user);
      const token = jwt.sign({id: user.id}, process.env.AUTH_SECRET);
      let returnData = {
        id: user.id,
        gravatar: user.gravatar,
        //courses: user.Courses,
        token: token
      }
      return {success: true, data: returnData}
>>>>>>> fucked
    }else{
      return {success: false, message: "The code has expired"}
    }
  }else{
    return {success: false, message: "Invalid code"}
  }
});