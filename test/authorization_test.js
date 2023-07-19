require("dotenv").config();
const {User, Course, Lesson} = require("../server/models");
const assert = require("assert");
const jwt = require("jsonwebtoken");

describe('Authorizations', () => { 
  let user,course,token,id = null;
  before(async function(){
    user = await User.create({email: "test2@test.com"});
    token = await jwt.sign({id: user.id}, process.env.AUTH_SECRET);
    course = await Course.create({
      slug: "test",
      Lessons: [
        {slug: "test"},
        {slug: "test2"},
        {slug: "test3"},
      ]
    }, {include: Lesson});
    
    await user.addCourse(course);
  });
  it("we can pull the id from the jwt", async () => {
    const {id} = await jwt.verify(token, process.env.AUTH_SECRET);
    assert.strictEqual(2,id);
  });
  it("we can get the user's auth stuff", async () => {
    //assert(user.courses.length === 1);
    const res = await User.getEverything(2);
    assert(res.Courses.length == 1)
    assert(res.Courses[0].Lessons.length == 3)
  });
});