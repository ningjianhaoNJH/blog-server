/**
 * Created by lenovo on 2018/11/27.
 */
'use strict';
const path = require('path');
const Koa = require('koa');
const fs = require('fs');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const koaCors = require('koa2-cors');
const config = require('./../config');
const router = require('./routers/index');
const jwtKoa = require('koa-jwt');
const publicKey = fs.readFileSync(path.join(__dirname, '../publicKey.pub'));

const app = new Koa();
app.use(koaLogger());
app.use(bodyParser());
app.use(koaCors({
  origin: "*",
  maxAge: 100,
  credentials: true,
  allowMethods: ["PUT","POST","GET","DELETE","OPTIONS"],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'Content-Length', 'X-Requested-With'],
}));

app.use((ctx, next) => {
    return next().catch((err) => {
        if(err.status === 401){
            ctx.status = 401;
            ctx.body = '权限不足';
        }else{
            throw err;
        }
    })
});
app.use(jwtKoa({secret: publicKey, key: 'jwtData'}).unless({
    path: [/^\/user\/login/,/^\/user\/register/]
}));

app.use(koaStatic(path.join(__dirname, './../static')));
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.port);
console.log(`the server is start at port:${config.port}`);
