const {
  createComment,
  replyComment,
  removeComment,
  getCommentList,
} = require('../service/comment.service');
const dataFormat = require('../utils/dataFormat');

class CommentController {
  //添加评论
  async create(ctx, next) {
    const { momentId } = ctx.request.params;
    const { content } = ctx.request.body;
    const userId = ctx.user.id;
    try {
      const result = await createComment(userId, momentId, content);
      ctx.body = dataFormat(200, '评论成功', result);
    } catch (error) {
      ctx.body = dataFormat(200, '评论失败', error);
      console.log(error);
    }
  }
  //回复评论
  async reply(ctx, next) {
    const { commentId } = ctx.request.params;
    const { content, momentId } = ctx.request.body;
    const userId = ctx.user.id;
    try {
      const result = await replyComment(userId, commentId, momentId, content);
      ctx.body = dataFormat(200, '回复成功', result);
    } catch (error) {
      ctx.body = dataFormat(500, '回复失败', error);
      console.log(error);
    }
  }
  // 删除评论
  async remove(ctx, next) {
    const { commentId } = ctx.request.params;
    try {
      const result = await removeComment(commentId);
      ctx.body = dataFormat(200, '删除成功', result);
    } catch (error) {
      ctx.body = dataFormat(500, '删除失败', error);
      console.log(error);
    }
  }

  // 获取评论列表
  async list(ctx, next) {
    const { momentId } = ctx.request.params;
    const result = await getCommentList(momentId);
    if (result.length !== 0) {
      ctx.body = dataFormat(200, '获取列表成功', result);
    } else {
      ctx.body = dataFormat(204, '该动态下没有评论', result);
    }
    console.log(result);
  }
}

module.exports = new CommentController();
