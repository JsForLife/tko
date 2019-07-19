// 使用其他js库时写ts声明文件的规范：https://www.tslang.cn/docs/handbook/modules.html
declare module 'koa-joi-router' {
  import * as Koa from 'koa';
  import * as Joi from 'joi';

  interface RouteValidate {
    params?: Object;
    query?: Object;
    body?: Object;
    output?: Object;
    type?: string;
  }

  interface JoiRequest extends Koa.Request {
    body?: any;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  }

  interface JoiContext extends Koa.Context {
    request: JoiRequest;
    session?: any;
  }

  interface JoiMiddleware {
    (context: JoiContext, next: () => Promise<any>): any;
  }

  interface RouteDefinition {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    path: string;
    handler: JoiMiddleware | JoiMiddleware[];
    validate?: RouteValidate;
    pre?: JoiMiddleware;
    meta?: Object;
  }

  interface RouteFunction {
    (definition: RouteDefinition): any;
  }

  interface RouterMiddlewareFunction {
    (): JoiMiddleware;
  }

  interface JoiPrefixFunction {
    (prefix: string): any;
  }

  interface RouterInstance {
    route: RouteFunction;
    routes: RouteDefinition[];
    middleware: RouterMiddlewareFunction;
    prefix: JoiPrefixFunction;
    router: {
      opts: any;
      stack: any[];
    };
    use: {
      (path: string, handler: JoiMiddleware): any;
      (handler: JoiMiddleware): any;
    };
    meta?: any;
  }

  interface JoiRouterConstructor {
    (): RouterInstance;
    new(): RouterInstance;
    Joi: typeof Joi;
  }

  const JoiRouter: JoiRouterConstructor;
  export = JoiRouter;
}