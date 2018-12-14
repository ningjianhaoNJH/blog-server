const router = require('koa-router')();
const homeController = require('../controllers/home');
const routers = router
    .get('/', homeController.getHome);
module.exports = routers;
