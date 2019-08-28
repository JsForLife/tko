import JoiRouter = require('koa-joi-router');
import * as service from './service';

const user_login:JoiRouter.JoiMiddleware = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  await service.check_user_is_existed(username, password);
  ctx.status = 403;
};

export {
  user_login,
};