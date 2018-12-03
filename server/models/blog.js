const dbUtils = require('./../utils/db-utils');
const comUtil = require('./../utils/common');
const blogModel = {
    async postBlogByUserId(options) {
        let result = await dbUtils.insertData('blog', options);
        if (comUtil.gettype(result) === '[object Object]') {
            result = true
        } else {
            result = null
        }
        return result
    },
    async getBlogByUserId(id) {
        let _sql = `SELECT * FROM blog  WHERE u_id=${id} order by created_time desc limit 2`;
        let result = await dbUtils.query(_sql);
        return result
    }
};
module.exports = blogModel;
