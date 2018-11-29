/**
 * Created by lenovo on 2018/11/28.
 * 文章评论
 */
module.exports = {
  async create(ctx) {
    ctx.request.status = 200;
    ctx.body = '创建评论';
  },
  async delete(ctx) {
    ctx.request.status = 200;
    ctx.body = '删除评论';
  },
  async update(ctx) {
    ctx.request.status = 200;
    ctx.body = '更新评论';
  },
  async select(ctx) {
    ctx.request.status = 200;
    ctx.body = '查评论';
  }
};