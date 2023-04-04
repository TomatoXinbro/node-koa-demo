const Router = require('koa-router');
const momentRouter = new Router({
  prefix: '/moment',
});
const { getList } = require('../controller/moment.controller');
const { verifyToken } = require('../middleware/auth.middleware');
const { create, update } = require('../controller/moment.controller');
/**
 * 分页查询动态列表
 */
momentRouter.get('/list', getList);
/**
 * 发布动态
 */
momentRouter.post('/create', verifyToken, create);
/**
 * 修改动态
 */
momentRouter.post('/update', verifyToken, update);

module.exports = momentRouter;
