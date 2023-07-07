import {User} from "../models";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {  
  const {token} = await readBody(event);
  //verify it and get the user's id
  try{
    const {id} = await jwt.verify(token, process.env.AUTH_SECRET);
    if(id){
      const user = await User.getEverything(id);
      let returnData = {
        id: user.id,
        gravatar: user.gravatar,
        courses: user.Courses
      }
      return {success: true, user: returnData};
    }else{
      return {success: false, message: "Invalid ID"}
    }
  }catch(err){
    console.error(err);
    return {success: false, message: "Invalid token"}
  }

});