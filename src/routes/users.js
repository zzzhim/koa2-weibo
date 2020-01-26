/*
 * Author: your name
 * Date: 2020-01-26 19:05:34
 * LastEditTime: 2020-01-26 21:27:48
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\routes\users.js
 */
const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

/**
 *
 * post请求演示
 */
// router.post("/login", async(ctx, next) => {
//     const { userName, password } = ctx.request.body
//     console.log(userName)
//     ctx.body = {
//         userName,
//         password
//     }
// })
module.exports = router
