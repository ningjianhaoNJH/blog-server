/**
 * Created by lenovo on 2018/11/28.
 */
const router = require('koa-router')();
const blogController = require('../controllers/blog');
const routers = router
    .get('/', blogController.getBlog)
    .put('/', blogController.putBlog)
    .post('/', blogController.postBlog)
    .delete('/:id', blogController.deleteBlog);
module.exports = routers;
