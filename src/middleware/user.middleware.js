const verifyUser = async (ctx, mext) => {
  // 1.获取用户名和密码
  console.log(ctx.request.body.user, ctx.request.body.password);
  ctx.body = "哈哈哈哈哈你被骗了";
  // 2.判断用户名或者密码不能空
  // 3.判断这次注册的用户名是没有被注册过
};

module.exports = {
  verifyUser,
};
