/**
 * Created by lenovo on 2018/11/28.
 * 文章评论
 */
const commentService = require('../services/label');
module.exports = {
    async postLabel(ctx) {
        let result = {
            message: '标签数量不能超过5个',
            data: null,
            code: 400
        };
        let formData = {
            name: ctx.request.body.name.trim(),
            u_id: ctx.state.jwtData.userId
        };
        await commentService.postLabel(formData)
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
            })
            .catch((err) => {
                result.message = err;
                result.code = 500;
                ctx.response.status = 500;
                ctx.body = result;
            })
    },
    async deleteLabel(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        await commentService.deletecommentService({id: ctx.params.id, uid: ctx.state.jwtData.userId})
            .then((res) => {
                if (res.affectedRows !== 0) {
                    result.message = 'SUCCESS';
                    result.code = 200;
                    ctx.response.status = 200;
                } else {
                    result.message = '未找到标签';
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
    async putLabel(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        let formData = {
            name: ctx.request.body.name,
            id: ctx.request.body.id
        };
        await commentService.putcommentService(formData)
            .then((res) => {
                if (res.affectedRows !== 0) {
                    result.message = 'SUCCESS';
                    result.code = 200;
                    ctx.response.status = 200;
                } else {
                    result.message = '未找到分类';
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
    async getLabel(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        await commentService.getcommentService(ctx.state.jwtData.userId)
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
