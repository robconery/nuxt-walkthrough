const crypto = require("crypto");
const { Model, DataTypes, Op } = require('sequelize');

class User extends Model{
  async isAuthorized(sku){
    const found = await this.getProducts({sku: sku});
    return found.length > 0;
  }
  static findByEmail(email){
    return User.findOne({
      where: {email}
    })
  }
  static findByGoogle(id){
    return User.findOne({where: {google: id}})
  }
  static findByGitHub(id){
    return User.findOne({where: {github: id}})
  }
  static async findByMagicLink(link){
    const now = new Date().getTime();
    const found = await User.findOne({
      where: {
        magic_link: link, 
        magic_link_expires: {[Op.gt]: now}
      }
    });
    return found;
  }
}

exports.init = function(sequelize){

  User.init({
    email : {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    gravatar: {
      type: DataTypes.VIRTUAL,
      get(){
        const hash = crypto.createHash("md5").update(this.email.toLowerCase().trim()).digest("hex");
        return `https://secure.gravatar.com/avatar/${hash}?size=150`;
      },
    },
    google: DataTypes.TEXT, //oauth
    github: DataTypes.TEXT, //oauth
    magic_link: DataTypes.TEXT, //email link
    magic_link_expires: DataTypes.BIGINT,
    last_login: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    }, {
     sequelize,
     underscored: true,
     timestamps: true,
     hooks : {

    }
  });
  return { User };
}
