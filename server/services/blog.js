const blogModel = require('../models/blog');
const blogService = {
    async createBlog( formData ) {
        let resultData = await blogModel.postBlogByUserId(formData);
        return resultData
    },
    async getBlogService(id) {
        let resultData = await blogModel.getBlogByUserId(id)
        return resultData
    }
};
module.exports = blogService;
