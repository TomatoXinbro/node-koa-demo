const { verifyToken } = require('../middleware/auth.middleware.js');
const {
  portraitUpload,
  pictureUpload,
} = require('../middleware/file.middleware');
const { portraitSave, pictureSave } = require('../controller/file.controller');
const Router = require('koa-router');
const fileRouter = new Router({
  prefix: '/upload',
});

// 头像上传
fileRouter.post('/portrait', verifyToken, portraitUpload, portraitSave);

// 图片上传

fileRouter.post('/picture', verifyToken, pictureUpload, pictureSave);

module.exports = fileRouter;
