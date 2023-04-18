const connection = require('../app/database');
// 用户服务
class UserService {
  //获取用户信息
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
  // 创建用户
  async create(users) {
    const { username, password } = users;
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
    const result = await connection.execute(statement, [username, password]);
    return result[0];
  }
  // 添加用户头像链接
  async createPortraitUrl(id, url) {
    const statement = `	UPDATE  user SET avatar_url=? WHERE id=?; `;
    const result = await connection.execute(statement, [url, id]);
    return result[0];
  }
  // 获取头像图片信息
  async getPortraitInfo(id) {
    const statement = `	SELECT * FROM avatar WHERE user_id=?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new UserService();
