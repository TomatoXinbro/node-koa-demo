const connection = require('../app/database');

class AuthService {
  async getEmpower(tableName, id, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id=? AND user_id=?;`;
    try {
      const [result] = await connection.execute(statement, [id, userId]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new AuthService();
