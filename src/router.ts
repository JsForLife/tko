import JoiRouter = require('koa-joi-router');
import * as _ from 'lodash';
import * as fs from 'fs';

interface GetAllRouters {
  () : JoiRouter.RouterInstance[];
}

interface RouterBuilder {
  () : JoiRouter.RouterInstance;
}

// 约束性的路由, business文件夹下每个业务文件夹均有个router文件
const get_all_routers:GetAllRouters = () => {
  const folders = fs.readdirSync(`${__dirname}/business`);
  return _.map(folders, (folder) => {
    const router = require(`${__dirname}/business/${folder}/router`);
    return router.default;
  });
};

const router_builder:RouterBuilder = () => {
  const router_collection = JoiRouter();
  const routers = get_all_routers();
  router_collection.route(_.map(routers, (router) => {
    return router.routes[0];
  }));
  return router_collection;
};

const api_router = router_builder();

export default api_router;