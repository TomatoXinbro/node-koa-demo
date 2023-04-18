const Router = require('koa-router');
const { createUsers, getPortrait } = require('../controller/user.controller');
const { verifyUser, handlePassword } = require('../middleware/user.middleware');

const userRouter = new Router({ prefix: '/users' });
// console.log(createUsers);

/**
 * 用户注册接口
 */
userRouter.post('/', verifyUser, handlePassword, createUsers);

// 获取用户头像
userRouter.get('/portrait/:id', getPortrait);
module.exports = userRouter;
