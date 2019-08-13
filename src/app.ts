import * as Koa from 'koa';
import 'module-alias/register';
import router from 'middleware/router';
import error_handle from 'middleware/error_handle_middleware';

const app = new Koa();

app.use(error_handle);
app.use(router.middleware());

app.listen(3000);
console.log('app run');