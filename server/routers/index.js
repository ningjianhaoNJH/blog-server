/**
 * Created by lenovo on 2018/11/28.
 */
const router = require('koa-router')();

const user = require('./user');
const blog = require('./blog');
const classic = require('./classification');
router.use('/user', user.routes(), user.allowedMethods());
router.use('/blog', blog.routes(), blog.allowedMethods());
router.use('/class', classic.routes(), classic.allowedMethods());
module.exports = router;
