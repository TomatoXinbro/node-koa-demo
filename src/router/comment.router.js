const { verifyToken, verifyEmpower } = require('../middleware/auth.middleware');
const {
  create,
  reply,
  remove,
  list,
} = require('../controller/comment.controller');

const Router = require('koa-router');
const commentRouter = new Router({
  prefix: '/comment',
});

/**
 * 发表评论-评论动态
 */
commentRouter.post('/:momentId', verifyToken, create);
/**
 * 发表评论-回复评论
 */
commentRouter.post('/reply/:commentId', verifyToken, reply);
/**
 * 删除评论
 */
commentRouter.delete('/:commentId', verifyToken, verifyEmpower, remove);

/**
 * 根据动态id获取评论列表
 */
commentRouter.get('/:momentId', list);

module.exports = commentRouter;
