const homeService = require('../services/home');
module.exports = {
    async getHome(ctx) {
        let result = {
            message: '',
            data: null,
            code: 400
        };
        await homeService.getHomeService()
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
