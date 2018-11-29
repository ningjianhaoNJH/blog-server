/**
 * Created by lenovo on 2018/11/28.
 * 用户
 */
const userCode = require('./../codes/user');
const userInfoService = require('../services/user');
module.exports = {
  async login(ctx) {
    let formData = ctx.request.body;
    let userResult = await userInfoService.signIn(formData); // 获取获取用户信息
    let result = {
      message: userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR,
      data: null,
      code: 400
    };
    if (!userResult) {
      ctx.response.status = 400;
      ctx.body = result;
      return
    }
    let token = await userInfoService.getToken(userResult);
    result.data = {
      token:token,
    };
    result.code = 200;
    result.message = "SUCCESS";
    ctx.response.status = 200;
    ctx.body = result;
  },
  async register(ctx) {
    let formData = ctx.request.body;
    let userResult = await userInfoService.register(formData); // 注册后获取id
    let result = {
      message: userCode.FAIL_USER_NAME_IS_EXIST,
      data: null,
      code: 400
    };
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