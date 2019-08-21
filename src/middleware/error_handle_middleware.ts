/*
* node错误栈：https://v8.dev/docs/stack-trace-api
* 原生Error对象： http://nodejs.cn/api/errors.html#errors_error_propagation_and_interception
*/
import Koa = require('koa');

// 目的是为了将joi-router, koa框架报错和业务报错
const error_handle:Koa.Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
  }
};

export default error_handle;