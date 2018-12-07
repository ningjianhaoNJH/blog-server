const labelModel = require('../models/label');
const labelService = {
    async postLabel(formData) {
        let queryLabel = await labelModel.getLabelCountByUserId(formData);
        if (!Array.isArray(queryLabel) || queryLabel[0].total_count >= 5) return null;
        let result = await labelModel.postLabelByUseId(formData);
        return result
    },
    async deleteLabelService(opt) {
        let labelResult = await labelModel.deleteLabelById(opt);
        return labelResult
    },
    async putLabelService(opt) {
        let labelResult = await labelModel.putLabelById(opt);
        return labelResult;
    },
    async getLabelService(uid) {
        let labelResult = await labelModel.getLabelById(uid);
        return labelResult
    }
};
module.exports = labelService;
