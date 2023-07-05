const { Model, DataTypes } = require('sequelize');

class Course extends Model{}
class Lesson extends Model{}

exports.init = function(sequelize){
  Course.init({
    slug: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    title: DataTypes.TEXT,
    github: DataTypes.TEXT,
    discussion: DataTypes.TEXT
    }, {
     sequelize,
     underscored: true,
     timestamps: false,
     hooks : {
       //https://github.com/sequelize/sequelize/blob/v6/src/hooks.js#L7
    }
  });

  Lesson.init({
    slug: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    vimeo_id: DataTypes.TEXT,
    free: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    }, {
     sequelize,
     underscored: true,
     timestamps: false,
     hooks : {
       //https://github.com/sequelize/sequelize/blob/v6/src/hooks.js#L7
    }
  });

  return { Course, Lesson };
}
