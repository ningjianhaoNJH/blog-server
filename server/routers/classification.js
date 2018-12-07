const router = require('koa-router')();
const classController = require('../controllers/classification');
const routers = router
    .get('/', classController.getClass)
    .put('/', classController.putClass)
    .post('/', classController.postClass)
    .delete('/:id', classController.deleteClass);
module.exports = routers;
