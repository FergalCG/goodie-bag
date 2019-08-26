const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 10
        }
    },
    imgUrl: {
        type: Sequelize.TEXT
    }
});

module.exports = Candy 
