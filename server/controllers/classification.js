/**
 * Created by lenovo on 2018/11/28.
 * 博客分类
 */
const classService = require('../services/classification');
module.exports = {
    async postClass(ctx) {
        let result = {
            message: '分类数量不能超过5个',
            data: null,
            code: 400
        };
        let formData = {
            name: ctx.request.body.name.trim(),
            u_id: ctx.state.jwtData.userId
        };
        await classService.postClass(formData)
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
    async deleteClass(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        await classService.deleteClassService({id: ctx.params.id, uid: ctx.state.jwtData.userId})
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
    async putClass(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        let formData = {
            name: ctx.request.body.name,
            id: ctx.request.body.id
        };
        await classService.putClassService(formData)
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
    async getClass(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        await classService.getClassService(ctx.state.jwtData.userId)
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
