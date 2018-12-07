const router = require('koa-router')();
const labelController = require('../controllers/label');
const routers = router
    .get('/', labelController.getLabel)
    .put('/', labelController.putLabel)
    .post('/', labelController.postLabel)
    .delete('/:id', labelController.deleteLabel);
module.exports = routers;
