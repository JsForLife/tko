import { mysql as mysql_config } from 'config/default';
import { Sequelize } from 'sequelize';
import * as _ from 'lodash';

// 创建数据库连接池，同时加载entity
const pool = {
  max: 30,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

const create_db_connection = (db_name:string) => {
  const config = mysql_config[db_name];

  if (!config) {
    throw new Error(`Can not find database config of ${db_name}`);
  }

  const { username, password, host, port, database } = config;
  return new Sequelize(database, username, password, {
    dialect: 'mysql',
    host,
    port,
    pool,
  });
};

const db_connections = {
  tko: create_db_connection('tko'),
};

export default db_connections;