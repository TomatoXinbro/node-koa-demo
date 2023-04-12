const connection = require('../app/database');
// 用户服务
class CommentService {
  //创建评论
  async createComment(userId, momentId, content) {
    const statement = `INSERT INTO comment (user_id,moment_id,content) VALUES (?,?,?);`;
    const result = await connection.execute(statement, [
      userId,
      momentId,
      content,
    ]);
    return result[0];
  }
  //回复评论
  async replyComment(userId, commentId, momentId, content) {
    const statement = `INSERT INTO comment (user_id,comment_id,moment_id,content) VALUES (?,?,?,?);`;
    const result = await connection.execute(statement, [
      userId,
      commentId,
      momentId,
      content,
    ]);
    return result[0];
  }
  // 删除评论
  async removeComment(commentId) {
    const statement = `DELETE FROM comment WHERE id =?;`;
    const result = await connection.execute(statement, [commentId]);
    return result[0];
  }
  //批量删除
  // async removeComment(commentIds) {
  //   const statement = `DELETE FROM comment WHERE id IN (?);`;
  //   const result = await connection.execute(statement, [commentIds]);
  //   return result[0];
  // }
}

module.exports = new CommentService();
