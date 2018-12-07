const commentModel = require('../models/comment');
const commentService = {
    async postComment(formData) {
        let queryLabel = await commentModel.getCommentCountByUserId(formData);
        if (!Array.isArray(queryLabel) || queryLabel[0].total_count >= 5) return null;
        let result = await labelModel.postCommentByUseId(formData);
        return result
    },
    async deleteCommentService(opt) {
        let labelResult = await labelModel.deleteLabelById(opt);
        return labelResult
    },
    async putCommentService(opt) {
        let labelResult = await labelModel.putLabelById(opt);
        return labelResult;
    },
    async getCommentService(uid) {
        let labelResult = await labelModel.getLabelById(uid);
        return labelResult
    }
};
module.exports = commentService;
