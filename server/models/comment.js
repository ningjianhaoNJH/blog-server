const dbUtils = require('./../utils/db-utils');
const commentModel = {
    async postCommentByUseId(formData) {
        let dbResult = dbUtils.insertData('label', formData);
        return dbResult
    },
    async getCommentCountByUserId(formData) {
        let _sql = `SELECT COUNT(*) as total_count FROM label WHERE u_id=${formData.u_id}`;
        let dbResult = dbUtils.query(_sql);
        return dbResult
    },
    async deleteCommentById(opt) {
        let _sql = `DELETE FROM label WHERE id=${opt.id} AND u_id=${opt.uid}`;
        let dbResult = dbUtils.query(_sql);
        return dbResult;
    },
    async putCommentById(opt) {
        let dbResult = await dbUtils.updateData('label', opt, opt.id);
        return dbResult;
    },
    async getCommentById(uid) {
        let  _sql =  `SELECT * FROM label WHERE u_id = ${uid} `;
        let dbResult = dbUtils.query(_sql);
        return dbResult;
    }
};
module.exports = commentModel;
