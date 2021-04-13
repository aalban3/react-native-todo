const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("./database");

const Todo = db.define("todo", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Todo;
