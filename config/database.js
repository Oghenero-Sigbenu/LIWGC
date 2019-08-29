const Sequelize = require("sequelize");

//create a sequelize instance 
const sequelize = new Sequelize("liwgc", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;