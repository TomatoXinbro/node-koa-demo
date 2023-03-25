const { create, getUserByName } = require("../service/user.service");
const dataFormate = require("../utils/dataFormate");

class UserController {
  async createUsers(ctx, next) {
    // 查询数据
    const result = await create(ctx.request.body);
    // 返回数据
    ctx.body = dataFormate(result, 200);
  }
}

module.exports = new UserController();
