const { create, getUserByName } = require("../service/user.service");
const dataFormate = require("../utils/dataFormate");
const { CREATE_SUCCESS } = require("../constants/success-types");

class UserController {
  async createUsers(ctx, next) {
    // 查询数据
    const result = await create(ctx.request.body);
    // 返回数据
    ctx.body = dataFormate(200, CREATE_SUCCESS, result);
  }
}

module.exports = new UserController();
