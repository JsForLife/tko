import login_router from './business/login/router';
import JoiRouter = require('koa-joi-router');
import * as _ from 'lodash';

interface RouterBuilder {
  (...router:JoiRouter.RouterInstance[]) : JoiRouter.RouterInstance;
}

const router_builder:RouterBuilder = (...routers) => {
  const router_collection = JoiRouter();
  router_collection.route(_.map(routers, (router) => {
    return router.routes[0];
  }));
  return router_collection;
};

const api_router = router_builder(login_router);

export default api_router;