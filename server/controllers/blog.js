/**
 * Created by lenovo on 2018/11/28.
 * 博客
 */
const blogService = require('../services/blog');
const comUtil = require('./../utils/common');
module.exports = {
    async postBlog(ctx) {
        let formData = ctx.request.body;
        formData.u_id = ctx.state.jwtData.userId;
        formData.created_time = new Date().getTime();
        let blogResult = await blogService.createBlog(formData);
        let result = {
            message: '参数错误',
            data: null,
            code: 400
        };
        if (!blogResult) {
            ctx.response.status = 400;
            ctx.body = result;
            return
        }
        result.code = 200;
        result.message = "SUCCESS";
        ctx.response.status = 200;
        ctx.body = result;
    },
    async deleteBlog(ctx) {
        ctx.request.status = 200;
        ctx.body = '删除博客';
    },
    async putBlog(ctx) {
        ctx.request.status = 200;
        ctx.body = '更新博客';
    },
    async getBlog(ctx) {
        let blogResult = await blogService.getBlogService(ctx.state.jwtData.userId);
        let result = {
            message: blogResult,
            data: null,
            code: 500
        };
        if (comUtil.gettype(blogResult) !== '[object Array]') {
            ctx.response.status = 500;
            ctx.body = result;
            return
        }
        result.data = blogResult;
        result.code = 200;
        result.message = "SUCCESS";
        ctx.response.status = 200;
        ctx.body = result;
    }
};
