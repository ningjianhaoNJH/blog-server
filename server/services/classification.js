const classModel = require('../models/classification');
const classService = {
    async postClass(formData) {
        let queryClass = await classModel.getClassCountByUserId(formData);
        if (!Array.isArray(queryClass) || queryClass[0].total_count >= 5) return null;
        let result = await classModel.postClassByUseId(formData);
        return result
    },
    async deleteClassService(opt) {
        let classResult = await classModel.deleteClassById(opt);
        return classResult
    },
    async putClassService(opt) {
        let classResult = await classModel.putClassById(opt);
        return classResult;
    },
    async getClassService(uid) {
        let classResult = await classModel.getClassById(uid);
        return classResult
    }
};
module.exports = classService;
