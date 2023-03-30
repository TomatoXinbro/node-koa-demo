const dataFormate = require("../utils/dataFormate");
const { LOGIN_SUCCESS } = require("../constants/success-types");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, "../app/keys/private.key")
);
// console.log(PRIVATE_KEY.toString());
class LoginController {
  create(ctx, next) {
    const { username } = ctx.request.body;
    console.log(username);
    try {
      const token = jwt.sign({ user: username }, PRIVATE_KEY, {
        algorithm: "RS256", // 加密算法
        expiresIn: 60 * 60 * 24, // 过期时间 24小时
      });
      // console.log(token);
      ctx.body = dataFormate(200, LOGIN_SUCCESS, { token: token });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new LoginController();
