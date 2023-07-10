import {User, Lesson, Course} from "../../models";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {  
  const {token, course, lesson} =  await readBody(event);
  const {id} = await jwt.verify(token, process.env.AUTH_SECRET);
  if(id){
    const user = await User.findByPk(id, {include: Lesson});
    const dbCourse = await Course.findOne({where: {slug: course.slug}})
    const dbLesson = await Lesson.findOne({where: {
      course_id: dbCourse.id, 
      slug: lesson.slug
    }});
    await user.addLesson(dbLesson);
    return {success: true}
  }else{
    return {success: false, message: "Invalid token"}
  }
});