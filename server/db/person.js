const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("./database");

const Person = db.define("person", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Person;
