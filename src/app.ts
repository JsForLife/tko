import 'module-alias/register';
import router from './router';
import * as Koa from 'koa';

const app = new Koa();

app.use(router.middleware());

app.listen(3000);
console.log('app run');