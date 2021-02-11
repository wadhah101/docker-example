var express = require("express");
var router = express.Router();
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

/* GET home page. */
router.get("/", async (req, res, next) => {
  await sequelize.sync();
  const jane = await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });
  res.json(jane);
});

module.exports = router;
