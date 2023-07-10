require("dotenv").config();
const { Sequelize } = require('sequelize');

let sequelize;

if(process.env.NODE_ENV === "production"){
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
  });
}else {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `./server/data/${process.env.NODE_ENV}.db`,
    logging: false
  });
}

exports.DB = {
  close(){
    sequelize.close();
  },
  startTransaction(){
    return sequelize.transaction();
  },
  async sync(){
    await sequelize.sync({
      force: true
    })
    return "DONE"
  },
  async run(sql, opts={}){
    return sequelize.query(sql,opts);
  },
  async query(sql){
    return sequelize.query(sql,{type: sequelize.QueryTypes.SELECT});
  }
}

//initialize

const {User} = require("./user").init(sequelize);
const {Course, Lesson} = require("./course").init(sequelize);

//custom finder
User.getEverything = function(id){
  return User.findByPk(id,{
    include: [{
      model: Course,
      include: Lesson
    }, Lesson]
  })
}

//relations
User.belongsToMany(Course, {through: "Authorizations"})
Course.belongsToMany(User, {through: "Authorizations"})
Course.hasMany(Lesson);
Lesson.belongsTo(Course);

User.belongsToMany(Lesson, {through: "Progress"})
Lesson.belongsToMany(User, {through: "Progress"})

//exports bits
exports.User = User;
exports.Course = Course;
exports.Lesson = Lesson;
