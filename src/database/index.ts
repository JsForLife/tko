import { Sequelize, Model } from 'sequelize';

const sequelize = new Sequelize('tko', 'root', 'Z843FdhWxHdLUq11LAB3eZnl', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 6666,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;

// class User extends Sequelize.Model { }
// User.init({
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE,
// }, {
//     sequelize,
//     modelName: 'user',
//   });

// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20),
//   }))
//   .then((jane) => {
//     console.log(jane.toJSON());
//   });