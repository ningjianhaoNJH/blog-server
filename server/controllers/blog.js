/**
 * Created by lenovo on 2018/11/28.
 * 博客
 */
const blogService = require('../services/blog');
const comUtil = require('./../utils/common');
const aa = 3333333;
// sdldlks
module.exports = {
    async postBlog(ctx) {
        let formData = ctx.request.body;
        let _formData = {
            classic: formData.classic,
            u_id: ctx.state.jwtData.userId,
            title: formData.title,
            created_time: new Date().getTime(),
            content: formData.content,
            label: formData.label,
            type: formData.type
        };
        let blogResult = await blogService.createBlog(_formData);
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
        let blogResult = await blogService.deleteBlogService({id: ctx.params.id, uid: ctx.state.jwtData.userId});
        let result = {
            message: '参数错误',
            data: null,
            code: 400
        };
        if(blogResult.affectedRows === 0) {
            result.message = '未找到博客';
            ctx.response.status = 400;
            ctx.body = result;
        } else {
            result.message = 'SUCCESS';
            result.code = 200;
            ctx.response.status = 200;
            ctx.body = result;
        }
    },
    async putBlog(ctx) {
        let formData = ctx.request.body;
        let result = {
            message: '参数错误',
            data: null,
            code: 400
        };
        if (formData.u_id !== ctx.state.jwtData.userId) {
            ctx.response.status = 401;
            result.message = '用户权限错误';
            ctx.body = result;
            result.code = 401;
            return
        }
        let _formData = {
            c_id: formData.c_id,
            id: formData.id,
            title: formData.title,
            updated_time: new Date().getTime(),
            context: formData.context,
            label: formData.label,
            type: formData.type
        };
        let blogResult = await blogService.putBlogService(_formData);

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
    },
};
