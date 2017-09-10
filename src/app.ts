import * as Koa from 'koa';

let app = new Koa(); 

app.use(async ctx => {
  ctx.body = 'Hello World!';
})

app.listen(3000);