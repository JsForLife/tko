export interface MysqlConfig {
  [db_name:string]:{
    host:string;
    port:number;
    username:string;
    password:string;
    database:string;
  };
}