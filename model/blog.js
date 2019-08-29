const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Blog extends Sequelize.Model{}

Blog.init({

},{sequelize})

module.exports = Blog;