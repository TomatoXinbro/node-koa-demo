const {
  getMomentList,
  createMoment,
  updateMoment,
  removeMoment,
  getPictureInfo,
} = require('../service/moment.service');
const dataFormat = require('../utils/dataFormat');
const { PORTRAIT_PATH } = require('../constants/file-path');
const sharp = require('sharp');
class MomentController {
  async getList(ctx, next) {
    //
    const { pageNum, pageSize } = ctx.request.query;
    const result = await getMomentList(pageNum, pageSize);
    ctx.body = dataFormat(200, '获取列表成功', result);
    await next();
  }

  async create(ctx, next) {
    const { moment } = ctx.request.body;
    const { id } = ctx.user;
    const result = await createMoment(moment, id);
    if (result) {
      ctx.body = dataFormat(200, '创建动态成功', result);
    }
  }

  async update(ctx, next) {
    const { content } = ctx.request.body;
    const { momentId } = ctx.request.params;
    const result = await updateMoment(momentId, content);
    if (result) {
      ctx.body = dataFormat(200, '修改动态成功啦', result);
    }
  }

  async remove(ctx, next) {
    const id = ctx.request.params.momentId;
    const result = await removeMoment(id);
    if (result) {
      ctx.body = dataFormat(200, '删除成功！', result);
    }
  }
  // async getPicture(ctx, next) {
  //   const { momentId } = ctx.request.params;
  //   const { w = 100, h = 100 } = ctx.request.query; // 默认传100*100大小的头像
  //   try {
  //     // 获取图片信息
  //     const [portraitInfo] = await getPictureInfo(momentId);
  //     if (portraitInfo) {
  //       // 读取调整大小并返回
  //       // 读取原始图片
  //       const image = sharp(`${PORTRAIT_PATH}/${portraitInfo.filename}`);
  //       // 调整大小
  //       image.resize(Number(w), Number(h));
  //       ctx.response.set('content-type', portraitInfo.mimetype);
  //       ctx.body = await image.toBuffer();
  //     } else {
  //       ctx.body = dataFormat(404, '请求资源不存在');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = new MomentController();
