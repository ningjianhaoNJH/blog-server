const dbUtils = require('./../utils/db-utils');
const classModel = {
    async postClassByUseId(formData) {
        let dbResult = dbUtils.insertData('class', formData);
        return dbResult
    },
    async getClassCountByUserId(formData) {
        let _sql = `SELECT COUNT(*) as total_count FROM class WHERE u_id=${formData.u_id}`;
        let dbResult = dbUtils.query(_sql);
        return dbResult
    },
    async deleteClassById(opt) {
        let _sql = `DELETE FROM class WHERE id=${opt.id} AND u_id=${opt.uid}`;
        let dbResult = dbUtils.query(_sql);
        return dbResult;
    },
    async putClassById(opt) {
        let dbResult = await dbUtils.updateData('class', opt, opt.id);
        return dbResult;
    },
    async getClassById(uid) {
        let  _sql =  `SELECT * FROM class WHERE u_id = ${uid} `;
        let dbResult = dbUtils.query(_sql);
        return dbResult;
    }
};
module.exports = classModel;
