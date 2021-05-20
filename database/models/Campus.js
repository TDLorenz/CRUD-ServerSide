const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  imageUrl: {
    type:Sequelize.STRING,
    defaultValue:'http://www.hunter.cuny.edu/facilities/pressroom/homepage/thomas-hunter-hall-main-campus/image'
  },

  address: {
    type:Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;