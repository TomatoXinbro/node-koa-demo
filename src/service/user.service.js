const connection = require("../app/database");
// 用户服务
class UserService {
  //获取用户信息
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new UserService();
