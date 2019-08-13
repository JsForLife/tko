import * as controller from './controller';
import * as router from 'koa-joi-router';

const login_router = router();
const Joi = router.Joi;

login_router.route({
  method: 'post',
  path: '/login',
  validate: {
    body: {
      username: Joi.string().min(3).max(20).required(),
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