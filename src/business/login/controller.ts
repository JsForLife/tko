import JoiRouter = require('koa-joi-router');

const user_login:JoiRouter.JoiMiddleware = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  if (user_name === 'default' && password === '123456') {
    ctx.status = 200;
    return;
  }
  ctx.status = 403;
};

export {
  user_login,
};