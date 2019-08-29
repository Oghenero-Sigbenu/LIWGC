const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Subscription extends Sequelize.Model{}

Subscription.init({
    email: {
        type: Sequelize.STRING(),
        allowNull: true
    },
},{sequelize})

module.exports = Subscription;