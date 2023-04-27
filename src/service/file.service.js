const connection = require('../app/database');

class fileService {
  // 保存头像信息
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
  // 保存动态图片信息
  // async createPictureInfo(filename, mimetype, size, userId, momentId) {
  //   const statement = `INSERT INTO file (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?,?)`;
  //   const result = await connection.execute(statement, [
  //     filename,
  //     mimetype,
  //     size,
  //     userId,
  //     momentId,
  //   ]);
  //   return result[0];
  // }
}

module.exports = new fileService();
