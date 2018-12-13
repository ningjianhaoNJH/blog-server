/**
 * Created by lenovo on 2018/11/28.
 * 文章评论
 */
const commentService = require('../services/comment');
const config = require('../../config');
module.exports = {
    async postComment(ctx) {
        let result = {
            message: '提交评论失败',
            data: null,
            code: 400
        };
        let formData = ctx.request.body;
        formData.created_time = new Date().getTime();
        formData.c_avatar = formData.c_avatar || config.defaultAvatar;
        await commentService.postComment(formData)
            .then((res) => {
                if (!res) {
                    ctx.response.status = 400;
                    ctx.body = result;
                } else {
                    result.code = 200;
                    result.message = "SUCCESS";
                    ctx.response.status = 200;
                    ctx.body = result;
                }
            }).catch((err) => {
                result.message = err;
                result.code = 500;
                ctx.response.status = 500;
                ctx.body = result;
            });
    },
    async deleteComment(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        await commentService.deleteCommentService({id: ctx.params.id, uid: ctx.state.jwtData.userId})
            .then((res) => {
                if (res.affectedRows !== 0) {
                    result.message = 'SUCCESS';
                    result.code = 200;
                    ctx.response.status = 200;
                } else {
                    result.message = '未找到评论';
                    ctx.response.status = 400;
                }
                ctx.body = result;
            })
            .catch((err) => {
                result.message = err;
                result.code = 500;
                ctx.response.status = 500;
                ctx.body = result;
            });
    },
    async putComment(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        let formData = ctx.request.body;
        formData.updated_time = new Date().getTime();
        await commentService.putCommentService(formData)
            .then((res) => {
                if (res.affectedRows !== 0) {
                    result.message = 'SUCCESS';
                    result.code = 200;
                    ctx.response.status = 200;
                } else {
                    result.message = '未找到评论';
                    ctx.response.status = 400;
                }
                ctx.body = result;
            })
            .catch((err) => {
                result.message = err;
                result.code = 500;
                ctx.response.status = 500;
                ctx.body = result;
            });
    },
    async getComment(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        await commentService.getCommentService({bid: ctx.params.id, uid: ctx.state.jwtData.userId})
            .then((res) => {
                result.message = 'SUCCESS';
                result.data = res;
                result.code = 200;
                ctx.response.status = 200;
                ctx.body = result;
            })
            .catch((err) => {
                result.message = err;
                result.code = 500;
                ctx.response.status = 500;
                ctx.body = result;
            });
    }
};
