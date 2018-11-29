/**
 * Created by lenovo on 2018/11/28.
 * 热门文章
 */
module.exports = {
  async create(ctx) {
    ctx.request.status = 200;
    ctx.body = '创建热门';
  },
  async delete(ctx) {
    ctx.request.status = 200;
    ctx.body = '删除热门';
  },
  async update(ctx) {
    ctx.request.status = 200;
    ctx.body = '更新热门';
  },
  async select(ctx) {
    ctx.request.status = 200;
    ctx.body = '查热门';
  }
};