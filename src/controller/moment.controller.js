const { getMomentList } = require("../service/moment.service");
const dataFormate = require("../utils/dataFormate");

class MomentController {
  async getList(ctx, next) {
    const { pageNum, pageSize } = ctx.request.query;
    console.log(pageNum, pageSize);
    const result = await getMomentList(pageNum, pageSize);
    // console.log(result);
    ctx.body = dataFormate(200, "获取列表成功", result);
    await next();
  }
}

module.exports = new MomentController();
