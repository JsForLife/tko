import { mysql as mysql_config } from '../config';
import { Sequelize } from 'sequelize';
import * as _ from 'lodash';

interface DbManager {
  [key:string]:Sequelize;
}

const db_manager:DbManager = {};
const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

for (const db_config of mysql_config) {
  const { database, username, password, host, port } = db_config;
  const db_connection = new Sequelize(database, username, password, {
    dialect: 'mysql',
    host,
    port,
    pool,
  });
  db_manager[database] = db_connection;
}

export default db_manager;

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