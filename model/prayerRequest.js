const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class PrayerRequests extends Sequelize.Model{}

PrayerRequests.init({
    name: {
        type: Sequelize.STRING(),
        allowNull: true
    },
    prayer: {
        type: Sequelize.STRING(),
        allowNull: true
    }
},{sequelize})

module.exports = PrayerRequests;