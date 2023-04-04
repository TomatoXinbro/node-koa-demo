const Router = require('koa-router');
const commentRouter = new Router({
  prefix: '/comment',
});

commentRouter.get('/', (ctx, next) => {
  ctx.body = '获取评论成功';
});

module.exports = commentRouter;
