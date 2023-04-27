const { create, getPortraitInfo } = require('../service/user.service');
const dataFormat = require('../utils/dataFormat');
const { CREATE_SUCCESS } = require('../constants/success-types');
const { PORTRAIT_PATH } = require('../constants/file-path');
const sharp = require('sharp');

class UserController {
  async createUsers(ctx, next) {
    // 查询数据
    const result = await create(ctx.request.body);
    // 返回数据
    ctx.body = dataFormat(200, CREATE_SUCCESS, result);
  }
  async getPortrait(ctx, next) {
    const { id } = ctx.request.params;
    const { w = 100, h = 100 } = ctx.request.query; // 默认传100*100大小的头像
    try {
      // 获取图片信息
      const [portraitInfo] = await getPortraitInfo(id);
      if (portraitInfo) {
        // 读取调整大小并返回
        // 读取原始图片
        const image = sharp(`${PORTRAIT_PATH}/${portraitInfo.filename}`);
        // 调整大小
        image.resize(Number(w), Number(h));
        ctx.response.set('content-type', portraitInfo.mimetype);
        ctx.body = await image.toBuffer();
      } else {
        ctx.body = dataFormat(404, '请求资源不存在');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
