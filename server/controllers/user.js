/**
 * Created by lenovo on 2018/11/28.
 * 用户
 */
const userCode = require('./../codes/user');
const userInfoService = require('../services/user');
const config = require('../../config');
module.exports = {
    async login(ctx) {
        let formData = ctx.request.body;
        let result = {
            message: userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR,
            data: null,
            code: 400
        };
        if (!formData.username.trim() || !formData.password.trim()) {
            ctx.response.status = 400;
            ctx.body = result;
            return
        }

        let userResult = await userInfoService.signIn(formData); // 获取获取用户信息
        if (!userResult) {
            ctx.response.status = 400;
            ctx.body = result;
            return
        }

        let {username, total, fans, like, comment, access, avatar} = userResult;
        let userInfo = {
            username, total, fans, like, comment, access, avatar
        };
        let token = await userInfoService.getToken(userResult);
        result.data = {
            token,
            userInfo
        };
        result.code = 200;
        result.message = "SUCCESS";
        ctx.response.status = 200;
        ctx.body = result;
    },
    async register(ctx) {
        let formData = ctx.request.body;
        let result = {
            message: userCode.FAIL_USER_NAME_IS_EXIST,
            data: null,
            code: 400
        };
        if (!formData.username.trim() || !formData.password.trim()) {
            result.message = '用户名或密码不能为空';
            ctx.response.status = 400;
            ctx.body = result;
            return
        }
        formData.avatar = formData.avatar || config.defaultAvatar;
        let userResult = await userInfoService.register(formData); // 注册后获取id

        if (!userResult) {
            ctx.response.status = 400;
            ctx.body = result;
        } else {
            result.code = 200;
            result.message = "SUCCESS";
            ctx.response.status = 200;
            ctx.body = result;
        }
    }
};
