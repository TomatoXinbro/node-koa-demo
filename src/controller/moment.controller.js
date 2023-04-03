const { getMomentList } = require("../service/moment.service");
const dataFormate = require("../utils/dataFormate");

class MomentController {
  async getList(ctx, next) {
    const { pageNum, pageSize } = ctx.request.query;
    const result = await getMomentList(pageNum, pageSize);
    ctx.body = dataFormate(200, "获取列表成功", result);
    await next();
  }
}

module.exports = new MomentController();
