const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Comments extends Sequelize.Model{}

Comments.init({

},{sequelize})

module.exports = Comments;