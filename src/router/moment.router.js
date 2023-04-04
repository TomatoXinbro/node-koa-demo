const Router = require('koa-router');
const momentRouter = new Router({
  prefix: '/moment',
});
const { getList } = require('../controller/moment.controller');
const { verifyToken } = require('../middleware/auth.middleware');
const { create } = require('../controller/moment.controller');
/**
 * 分页查询动态列表
 */
momentRouter.get('/list', getList);
/**
 * 发布动态
 */
momentRouter.post('/create', verifyToken, create);

module.exports = momentRouter;
