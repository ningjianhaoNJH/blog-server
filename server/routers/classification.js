const router = require('koa-router')();
const adminController = require('../controllers/classification');
const routers = router
    .get('/', adminController.getClass)
    .put('/', adminController.putClass)
    .post('/', adminController.postClass)
    .delete('/:id', adminController.deleteClass);
module.exports = routers;
