const connection = require('../app/database');

class fileService {
  async createPortraitInfo(filename, mimetype, size, id) {
    const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?)`;
    const result = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      id,
    ]);
    return result[0];
  }
}

module.exports = new fileService();
