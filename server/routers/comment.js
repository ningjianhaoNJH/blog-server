const router = require('koa-router')();
const commentController = require('../controllers/comment');
const routers = router
    .get('/:id', commentController.getComment)
    .put('/', commentController.putComment)
    .post('/', commentController.postComment)
    .delete('/:id', commentController.deleteComment);
module.exports = routers;
