import login_router from './business/login/router';
import * as Koa from 'koa';

const app = new Koa();

app.use(login_router.middleware());

app.use(async (ctx, netx) => {
  const { request } = ctx;
  const { url } = request;
  if (url === '/hellow') {
    ctx.body = 'Hello';
  } else {
    await netx();
  }
});

app.use(async (ctx) => {
  ctx.body = 'Hello World!';
});

app.listen(3000);
console.log('app run');