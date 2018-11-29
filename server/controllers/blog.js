/**
 * Created by lenovo on 2018/11/28.
 * 博客
 */
module.exports = {
  async create(ctx) {
    ctx.request.status = 200;
    ctx.body = '创建博客';
  },
  async delete(ctx) {
    ctx.request.status = 200;
    ctx.body = '删除博客';
  },
  async update(ctx) {
    ctx.request.status = 200;
    ctx.body = '更新博客';
  },
  async select(ctx) {
    ctx.request.status = 200;
    ctx.body = '查博客';
  }
};