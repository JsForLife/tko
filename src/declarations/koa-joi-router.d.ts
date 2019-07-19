// 使用其他js库时写ts声明文件的规范：https://www.tslang.cn/docs/handbook/modules.html

declare module 'koa-joi-router' {
  import * as Koa from 'koa';
  import * as Joi from 'joi';

  namespace JoiRouter {
    export interface RouteValidate {
      params?: Object;
      query?: Object;
      body?: Object;
      output?: Object;
      type?: string;
    }

    export interface JoiRequest extends Koa.Request {
      body?: any;
      method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    }

    export interface JoiContext extends Koa.Context {
      request: JoiRequest;
      session?: any;
    }

    export interface JoiMiddleware {
      (context: JoiContext, next: () => Promise<any>): any;
    }

    export interface RouteDefinition {
      method: 'get' | 'post' | 'put' | 'patch' | 'delete';
      path: string;
      handler: JoiMiddleware | JoiMiddleware[];
      validate?: RouteValidate;
      pre?: JoiMiddleware;
      meta?: Object;
    }

    export interface RouteHandler {
      (definition: RouteDefinition | RouteDefinition[]): any;
    }

    export interface RouterMiddleware {
      (): JoiMiddleware;
    }

    export interface JoiPrefixFunction {
      (prefix: string): any;
    }

    export interface RouterInstance {
      route: RouteHandler;
      routes: RouteDefinition[];
      middleware: RouterMiddleware;
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
  }

  interface JoiRouterConstructor {
    (): JoiRouter.RouterInstance;
    new(): JoiRouter.RouterInstance;
    Joi: typeof Joi;
  }

  const JoiRouter: JoiRouterConstructor;

  export = JoiRouter;
}