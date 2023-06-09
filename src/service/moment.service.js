const connection = require('../app/database');
// 动态服务
class MomentService {
  //分页查询动态列表
  async getMomentList(pageNum = '1', pageSize = '10') {
    const statement = `
    SELECT 
    m.id id, 
    m.content content, 
    m.createAt createTime, 
    m.updateAt updateTime,
    JSON_OBJECT('id', u.id, 'name', u.name) author,
    (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) commentCount
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id
    LIMIT ?, ?;
  `;
    const totalStatement = `SELECT COUNT(*) total FROM  moment ;`;
    const offset = (pageNum - 1) * pageSize; // 计算起始位置
    const [list] = await connection.execute(statement, [offset + '', pageSize]);
    const [total] = await connection.execute(totalStatement);
    return {
      list,
      total: total[0].total,
    };
  }

  async createMoment(content, userid) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [content, userid]);
    return result;
  }

  async updateMoment(momentId, content) {
    const statement = `UPDATE moment SET content =? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }

  async removeMoment(Momentid) {
    const statement = `DELETE FROM moment WHERE id =?;`;
    const [result] = await connection.execute(statement, [Momentid]);
    return result;
  }
}

module.exports = new MomentService();
