const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class YouthActivities extends Sequelize.Model{}

YouthActivities.init({
    Activities:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    time:{
        type: Sequelize.STRING(),
        allowNull: false
    }
},{sequelize})

module.exports = YouthActivities;