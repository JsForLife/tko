import * as controller from './controller';
import * as router from 'koa-joi-router';
import * as Koa from 'koa';
const Joi = router.Joi;

const login_router = router();

login_router.route({
  method: 'post',
  path: '/login',
  validate: {
    body: {
      user_name: Joi.string().min(3).max(20).required(),
      password: Joi.string().min(6).max(18).required(),
    },
    type: 'json',
    output: {
      200: {
        body: {
          token: Joi.string(),
        },
      },
    },
  },
  handler: [controller.user_login],
});

export default login_router;