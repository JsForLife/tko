import * as router from 'koa-joi-router';
import * as Koa from 'koa';
const Joi = router.Joi;

const login_router = router();

// login_router.router({
//   method: 'post',
//   path: 'login',
//   validate: {
//     body: {
//       user_name: Joi.string().min(3).max(20).required(),
//       password: Joi.string().min(6).max(18).required(),
//     },
//     type: 'json',
//   },
//   output: {
//     200: {
//       body: {
//         token: Joi.string(),
//       },
//     },
//   },
//   handler: async (ctx) => {
//     ctx.body = { token: 'dadadaa' };
//   },
// });

login_router.route({
  method: 'get',
  path: '/login',
  handler: async (ctx:Koa.Context) => {
    ctx.body = { token: 'dadadaa' };
  },
});

export default login_router;