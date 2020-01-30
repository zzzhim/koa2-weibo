/*
 * Author: your name
 * Date: 2020-01-26 19:05:34
 * LastEditTime: 2020-01-30 21:46:51
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\routes\users.js
 */
const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)

const { SECRET } = require('../config/jwt')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 模拟登录
router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body

    if(userName === 'zhangsan' && password === '123456') {
        let userInfo = {
            userId: 1,
            userName,
            password
        }
        // 加密 userInfo
        let token
        if(userInfo) {
            token = jwt.sign(userInfo, SECRET, { expiresIn: '1h' })
        }

        return ctx.body = {
            status: 200,
            msg: '登陆成功',
            data: token
        }
    }else {
        return ctx.body = {
            status: -1,
            msg: '登陆失败'
        }
    }
})

// 获取用户信息
router.get('/getUserInfo', async(ctx, next) => {
    const token = ctx.header.authorization

    try {
        // 解析token
        const payload = await verify(token.split(' ')[1], SECRET)
        ctx.body = {
            status: 200,
            userInfo: payload
        }
    }catch(err) {
        ctx.body = {
            status: -1,
            msg: 'verify token failed'
        }
    }
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
