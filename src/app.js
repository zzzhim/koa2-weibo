/*
 * Author: your name
 * Date: 2020-01-26 19:05:34
 * LastEditTime: 2020-02-15 00:40:55
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
const koaStatic = require('koa-static')
const path = require('path')
// const koaJWT = require('koa-jwt')

const { REDIS_CONF } = require('./config/db')
// const { SECRET } = require('./config/jwt')
const { isProd } = require('./utils/env')
const { SID, PREFIX } = require('./config/session')
// 路由
const userViewRouter = require('./routes/views/user')
const blogViewRouter = require('./routes/views/blog')
const errorViewRouter = require('./routes/views/error')

// require('./seq/sync')
// const index = require('./routes/index')
// const users = require('./routes/users')

// API
const userAPIRouter = require('./routes/api/user')
const blogHomeAPIRouter = require('./routes/api/blog')
const blogProfileAPIRouter = require('./routes/api/blog-profile')
const utilsAPIRuter = require('./routes/api/utils')


// error handler
let onerrorConfig = {}

if(isProd) {
    onerrorConfig = {
        redirect: '/error'
    }
}

onerror(app, onerrorConfig)

// app.use(koaJWT({
//     secret: SECRET
// }).unless({
//     path: [ /^\/users\/login/, /^\/login/ ] // 自定义哪些目录忽略 jwt 验证
// }))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))
app.use(koaStatic(path.join(__dirname, '..', 'uploadFiles')))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// session 配置
app.keys = [ 'zzzhim' ]
app.use(session({
    key: SID, // 默认 'koa.sid'
    prefix: PREFIX, // redis key 的前缀, 默认是 'koa:sess:'
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

// API
app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods())
app.use(blogHomeAPIRouter.routes(), blogHomeAPIRouter.allowedMethods())
app.use(blogProfileAPIRouter.routes(), blogProfileAPIRouter.allowedMethods())
app.use(utilsAPIRuter.routes(), utilsAPIRuter.allowedMethods())

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
app.use(userViewRouter.routes(), userViewRouter.allowedMethods())
app.use(blogViewRouter.routes(), blogViewRouter.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
