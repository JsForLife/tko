/*
* node错误栈：https://v8.dev/docs/stack-trace-api
* 原生Error对象： http://nodejs.cn/api/errors.html#errors_error_propagation_and_interception
*/
import Koa = require('koa');

// 用于捕获中间件产生的同步错误
const error_handle:Koa.Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
  }
};

export default error_handle;