import { Model, NUMBER, STRING, DATE } from 'sequelize';
import db_connections from 'database/connetions';

class User extends Model { }
User.init({
  id: {
    primaryKey: true,
    type: NUMBER,
  },
  username: {
    unique: true,
    type: STRING,
  },
  password: {
    type: STRING,
  },
  created_at: {
    type: DATE,
  },
  updated_at: {
    type: DATE,
  },
  version: {
    type: NUMBER,
  },
  // tslint:disable-next-line:align
}, {
    sequelize: db_connections.tko,
    tableName: 'tbl_user',
    timestamps: false,
  });

export default User;

// CREATE TABLE `tbl_user` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `username` varchar(25) NOT NULL COMMENT '用户名',
//   `password` varchar(255) NOT NULL COMMENT '密码',
//   `created_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
//   `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
//   `version` int(11) unsigned NOT NULL DEFAULT 1 COMMENT '数据版本',
//   PRIMARY KEY (`id`),
//   UNIQUE KEY `username` (`username`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;