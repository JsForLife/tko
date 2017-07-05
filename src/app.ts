import * as Koa from 'koa';

let app = new Koa(); 

app.use(()=>{
  this.body = 'Hello World1';
});

app.listen(3000);