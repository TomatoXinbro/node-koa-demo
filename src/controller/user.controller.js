const { create, getUserByName } = require("../service/user.service");

class UserController {
  async createUsers(ctx, next) {
    // 查询数据
    await create(ctx.request.body);
    // 返回数据
    const reruselt = `${ctx.request.body.username}创建成功`;

    ctx.body = reruselt;
  }
}

module.exports = new UserController();
