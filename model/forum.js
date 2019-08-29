const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Forum extends Sequelize.Model{}

Forum.init({
    name:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    topic:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    detail:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    date:{
        type: Sequelize.STRING(),
        allowNull: false
    }
},{sequelize})

module.exports = Forum;