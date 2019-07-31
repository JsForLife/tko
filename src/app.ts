import sequelize from './database/index';
import router from './router';
import * as Koa from 'koa';

const app = new Koa();

app.use(router.middleware());

app.listen(3000);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err:Error) => {
    console.error('Unable to connect to the database:', err);
  });

console.log('app run');