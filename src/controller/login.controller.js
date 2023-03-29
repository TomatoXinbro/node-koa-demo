const dataFormate = require("../utils/dataFormate");
const { LOGIN_SUCCESS } = require("../constants/success-types");

class LoginController {
  create(ctx, next) {
    ctx.body = dataFormate(200, LOGIN_SUCCESS, {
      token: "dddasdfasdfakhfjaksydfyiueyanbsdyufgaf",
    });
  }
}

module.exports = new LoginController();
