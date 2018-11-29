/**
 * Created by lenovo on 2018/11/28.
 * 博客分类
 */
module.exports = {
  async create(ctx) {
    ctx.request.status = 200;
    ctx.body = '创建分类';
  },
  async delete(ctx) {
    ctx.request.status = 200;
    ctx.body = '删除分类';
  },
  async update(ctx) {
    ctx.request.status = 200;
    ctx.body = '更新分类';
  },
  async select(ctx) {
    ctx.request.status = 200;
    ctx.body = '查分类';
  }
};