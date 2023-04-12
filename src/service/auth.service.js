const connection = require('../app/database');

class AuthService {
  async getEmpower(tableName, id, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id=? AND user_id=?;`;

    const result = await connection.execute(statement, [id, userId]);
    return result[0];
  }
}
module.exports = new AuthService();
