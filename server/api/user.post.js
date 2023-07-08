import {User, Course} from "../models";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {  
  const {token} = await readBody(event);
  //verify it and get the user's id
  try{
    const {id} = await jwt.verify(token, process.env.AUTH_SECRET);
    if(id){
      let user = await User.getEverything(id);
      //refresh the token
      const token = jwt.sign({id: user.id}, process.env.AUTH_SECRET);
      return {success: true, user: {
        id: user.id,
        courses: user.Courses,
        token
      }};
    }else{
      return {success: false, message: "Invalid ID"}
    }
  }catch(err){
    console.error(err);
    return {success: false, message: "Invalid token"}
  }

});