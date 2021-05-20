const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    validate:{
      isEmail: true, 
    }
  }, 
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:'https://dirtywatermedia.com/wp-content/uploads/2018/02/College-Student-Thumbs-Up-e1440734712137.jpg'
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }

});

module.exports = Student;