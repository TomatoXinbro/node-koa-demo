const {
  createPortraitInfo,
  createPictureInfo,
} = require('../service/file.service');
const { createPortraitUrl } = require('../service/user.service');
const dataFormat = require('../utils/dataFormat');
const { APP_HOST, APP_PORT } = require('../app/config');
class fileController {
  // 把头像文件信息存储在数据库中
  async portraitSave(ctx, next) {
    // console.log('ctx.request.file', ctx.request.file);
    const { filename, mimetype, size } = ctx.request.file;
    console.log(filename, mimetype, size);
    const userId = ctx.user.id;
    const portraitUrl = `${APP_HOST}:${APP_PORT}/users/portrait/${userId}`;
    try {
      // 把头像url存储到user表中
      const res = await createPortraitUrl(userId, portraitUrl);
      // 保存图片信息
      const result = await createPortraitInfo(filename, mimetype, size, userId);
      ctx.body = dataFormat(200, '上传成功', res);
    } catch (error) {
      console.log(error);
    }
  }
  // 把动态图片信息存储在数据库中
  async pictureSave(ctx, next) {
    const files = ctx.request.files;
    const userId = ctx.user.id;
    const { momentId } = ctx.request.query;
    try {
      files.forEach(async (element) => {
        const { filename, mimetype, size } = element;
        // 保存图片信息
        const result = await createPictureInfo(
          filename,
          mimetype,
          size,
          userId,
          momentId
        );
      });
      ctx.body = dataFormat(200, '上传成功');
    } catch (error) {
      console.log(error);
      ctx.body = dataFormat(500, '上传失败', error);
    }
  }
}

module.exports = new fileController();
