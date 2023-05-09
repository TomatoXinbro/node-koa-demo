const Router = require('koa-router');
const momentRouter = new Router({
  prefix: '/moment',
});
const { getList, getPicture } = require('../controller/moment.controller');
const { verifyToken, verifyEmpower } = require('../middleware/auth.middleware');
const { create, update, remove } = require('../controller/moment.controller');
/**
 * 分页查询动态列表
 */
momentRouter.get('/list', getList);
/**
 * 获取动态详情
 */
//  momentRouter.get('/:momentId', detail);
/**
 * 发布动态
 */
momentRouter.post('/create', verifyToken, create);
/**
 * 修改动态
 */
momentRouter.patch('/:momentId', verifyToken, verifyEmpower, update);
/**
 * 删除动态
 */
momentRouter.delete('/:momentId', verifyToken, verifyEmpower, remove);

// 获取动态图片的服务
momentRouter.get('/picture/:filename', getPicture);

module.exports = momentRouter;
