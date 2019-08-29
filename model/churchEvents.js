const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class ChurchEvents extends Sequelize.Model{}

ChurchEvents.init({
   events:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    time:{
        type: Sequelize.STRING(),
        allowNull: false
    }
},{sequelize})

module.exports = ChurchEvents;