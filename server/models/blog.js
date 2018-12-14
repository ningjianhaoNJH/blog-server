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
    async getBlogByUserId(opt) {
        let _sql = `SELECT * FROM blog  WHERE u_id=${opt.id} order by ${opt.orderBy}`;
        let result = await dbUtils.query(_sql);
        return result;
    },
    async putBlogByBlogId(opt) {
        let result = await dbUtils.updateData('blog', opt, opt.id);
        return result;
    },
    async deleteBlogByUserIdAndId(opt) {
        let _sql = `DELETE FROM blog WHERE id=${opt.id} AND u_id=${opt.uid}`;
        let result = await dbUtils.query(_sql)
        return result;
    },
    async getHotBlogByUserId(opt) {
        let _sql = `SELECT * FROM blog  ${opt.id ? 'WHERE u_id=' + opt.id : ''} order by ${opt.orderBy} limit ${opt.pageNum}, ${opt.pageSize}`;
        let result = await dbUtils.query(_sql);
        return result;
    }
};
module.exports = blogModel;
