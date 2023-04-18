const { create, getPortraitInfo } = require('../service/user.service');
const dataFormat = require('../utils/dataFormat');
const { CREATE_SUCCESS } = require('../constants/success-types');
const { PORTRAIT_PATH } = require('../constants/file-path');
const fs = require('fs');

class UserController {
  async createUsers(ctx, next) {
    // 查询数据
    const result = await create(ctx.request.body);
    // 返回数据
    ctx.body = dataFormat(200, CREATE_SUCCESS, result);
  }
  async getPortrait(ctx, next) {
    const { id } = ctx.request.params;
    try {
      // 获取图片信息
      const [portraitInfo] = await getPortraitInfo(id);
      console.log(portraitInfo);
      // 读取并返回
      ctx.response.set('content-type', portraitInfo.mimetype);
      ctx.body = fs.createReadStream(
        `${PORTRAIT_PATH}/${portraitInfo.filename}`
      );
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
