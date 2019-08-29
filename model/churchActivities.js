const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class ChurchActivities extends Sequelize.Model{}

ChurchActivities.init({
    Activities:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    time:{
        type: Sequelize.STRING(),
        allowNull: false
    },
},{sequelize})

module.exports = ChurchActivities;