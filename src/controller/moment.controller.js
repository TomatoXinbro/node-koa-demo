const {
  getMomentList,
  createMoment,
  updateMoment,
  removeMoment,
} = require('../service/moment.service');

const { getPictureInfo } = require('../service/file.service');
const dataFormat = require('../utils/dataFormat');
const { PICTURE_PATH } = require('../constants/file-path');
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
  async getPicture(ctx, next) {
    const { filename } = ctx.request.params;
    let w, h;
    if (ctx.request.query.w && ctx.request.query.h) {
      w = Number(ctx.request.query.w);
      h = Number(ctx.request.query.h);
    } else {
      w = null;
      h = null;
    }

    const portraitInfo = await getPictureInfo(filename);
    try {
      // 获取图片信息
      if (filename) {
        // 读取调整大小并返回
        // 读取原始图片
        const image = sharp(`${PICTURE_PATH}/${filename}`);
        // 调整大小
        image.resize({
          width: w,
          height: h,
        });
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

module.exports = new MomentController();
