/**
 * Created by lenovo on 2018/11/28.
 */
const router = require('koa-router')();

const user = require('./user');
router.use('/user', user.routes(), user.allowedMethods());
module.exports = router;
