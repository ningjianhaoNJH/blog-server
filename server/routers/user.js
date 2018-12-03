/**
 * Created by lenovo on 2018/11/28.
 */
const router = require('koa-router')();
const adminController = require('../controllers/user');
const routers = router
    .post('/login', adminController.login)
    .post('/register', adminController.register);
module.exports = routers;
