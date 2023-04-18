const multer = require('@koa/multer');
const { PORTRAIT_PATH, PICTURE_PATH } = require('../constants/file-path');

// 处理单个头像上传
const portraitUpload = multer({
  dest: PORTRAIT_PATH,
}).single('portrait');
// 批量处理图片上传
const pictureUpload = multer({
  dest: PICTURE_PATH,
}).array('picture', 50); // 使用array并设置最大上传数量 默认为没有数量限制

module.exports = {
  portraitUpload,
  pictureUpload,
};
