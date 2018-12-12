const commentModel = require('../models/comment');
const commentService = {
    async postComment(formData) {
        let result = await commentModel.postComment(formData);
        if (result.affectedRows !== 1) return null;
        return result
    },
    async deleteCommentService(opt) {
        let result = await commentModel.deleteCommentById(opt);
        return result
    },
    async putCommentService(opt) {
        let result = await commentModel.putCommentById(opt);
        return result;
    },
    async getCommentService(opt) {
        let result = await commentModel.getCommentById(opt);
        return result
    }
};
module.exports = commentService;
