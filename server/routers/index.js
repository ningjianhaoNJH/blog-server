/**
 * Created by lenovo on 2018/11/28.
 */
const router = require('koa-router')();

const user = require('./user');
const blog = require('./blog');
const classic = require('./classification');
const label = require('./label');
const comment = require('./comment');
const home = require('./home');
router.use('/user', user.routes(), user.allowedMethods())
      .use('/blog', blog.routes(), blog.allowedMethods())
      .use('/class', classic.routes(), classic.allowedMethods())
      .use('/label', label.routes(), label.allowedMethods())
      .use('/comment', comment.routes(), comment.allowedMethods())
      .use('/home', home.routes(), home.allowedMethods());
module.exports = router;
