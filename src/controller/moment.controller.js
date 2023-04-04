const { getMomentList, createMoment } = require('../service/moment.service');
const dataFormat = require('../utils/dataFormat');

class MomentController {
  async getList(ctx, next) {
    //
    const { pageNum, pageSize } = ctx.request.query;
    const result = await getMomentList(pageNum, pageSize);
    ctx.body = dataFormat(200, '获取列表成功', result);
    await next();
  }
  async create(ctx, nemt) {
    const { moment } = ctx.request.body;
    const { id } = ctx.user;
    const result = await createMoment(moment, id);
    if (result) {
      ctx.body = dataFormat(200, '创建动态成功', result);
    }
  }
}

module.exports = new MomentController();
