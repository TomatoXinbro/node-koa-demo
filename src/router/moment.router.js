const Router = require("koa-router");
const momentRouter = new Router({
  prefix: "/moment",
});
const { getList } = require("../controller/moment.controller");

/**
 * 分页查询动态列表
 */
momentRouter.get("/list", getList);

module.exports = momentRouter;
