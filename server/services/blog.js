const blogModel = require('../models/blog');
const blogService = {
    async createBlog( formData ) {
        let resultData = await blogModel.postBlogByUserId(formData);
        return resultData
    },
    async getBlogService(id) {
        let resultData = await blogModel.getBlogByUserId(id)
        return resultData
    },
    async putBlogService(formData) {
        let resultData = await blogModel.putBlogByBlogId(formData);
        return resultData
    },
    async deleteBlogService(formData) {
        let resultData = await blogModel.deleteBlogByUserIdAndId(formData);
        return resultData
    }
};
module.exports = blogService;
