/**
 * Created by lenovo on 2018/11/28.
 */
const router = require('koa-router')();
const adminController = require('../controllers/blog');
const routers = router
    .get('/', adminController.getBlog)
    .put('/', adminController.putBlog)
    .post('/', adminController.postBlog)
    .delete('/', adminController.deleteBlog);
module.exports = routers;
