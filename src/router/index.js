// 路由入口

const fs = require("fs");

const useRoutes = function () {
  // 使用function 以使用this
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return;
    const router = require(`./${file}`);
    this.use(router.routes());
    this.use(router.allowedMethods());
  });
};

module.exports = useRoutes;
