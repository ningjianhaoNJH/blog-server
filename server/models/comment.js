const dbUtils = require('./../utils/db-utils');
const commentModel = {
    async postComment(formData) {
        let dbResult = dbUtils.insertData('comment', formData);
        return dbResult
    },
    async deleteCommentById(opt) {
        let _sql = `DELETE FROM comment WHERE id=${opt.id} AND u_id=${opt.uid}`;
        let dbResult = dbUtils.query(_sql);
        return dbResult;
    },
    async putCommentById(opt) {
        let dbResult = await dbUtils.updateData('comment', opt, opt.id);
        return dbResult;
    },
    async getCommentById(opt) {
        let  _sql =  `SELECT * FROM comment WHERE u_id = ${opt.uid} AND b_id=${opt.bid} limit 20`;
        let dbResult = dbUtils.query(_sql);
        return dbResult;
    }
};
module.exports = commentModel;
