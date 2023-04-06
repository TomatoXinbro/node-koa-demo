const {
  getMomentList,
  createMoment,
  updateMoment,
} = require('../service/moment.service');
const dataFormat = require('../utils/dataFormat');

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
}

module.exports = new MomentController();
