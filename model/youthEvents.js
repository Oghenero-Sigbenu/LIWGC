const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class YouthEvents extends Sequelize.Model{}

YouthEvents.init({
    events:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    time:{
        type: Sequelize.STRING(),
        allowNull: false
    }
},{sequelize})

module.exports = YouthEvents;