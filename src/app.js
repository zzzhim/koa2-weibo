/*
 * Author: your name
 * Date: 2020-01-26 19:05:34
 * LastEditTime: 2020-01-30 21:10:22
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\app.js
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const koaJWT = require('koa-jwt')

const { REDIS_CONF } = require('./config/db')
const { SECRET } = require('./config/jwt')
const { isProd } = require('./utils/env')
// 路由
const errorViewRouter = require('./routes/views/error')

// require('./seq/sync')
const index = require('./routes/index')
const users = require('./routes/users')

// error handler
let onerrorConfig = {}

if(isProd) {
    onerrorConfig = {
        redirect: '/error'
    }
}

onerror(app, onerrorConfig)

app.use(koaJWT({
    secret: SECRET
}).unless({
    path: [ /^\/users\/login/ ] // 自定义哪些目录忽略 jwt 验证
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// session 配置
app.keys = [ 'zzzhim' ]
app.use(session({
    key: 'weibo.sid', // 默认 'koa.sid'
    prefix: 'weibo:sess:', // redis key 的前缀, 默认是 'koa:sess:'
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // ms
    },
    store: redisStore({
        all: `${REDIS_CONF.host}:${REDIS_CONF.prot}`
    })
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
