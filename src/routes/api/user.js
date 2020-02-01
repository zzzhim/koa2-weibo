/*
 * Author: your name
 * Date: 2020-02-01 01:03:40
 * LastEditTime: 2020-02-01 15:36:36
 * LastEditors: Please set LastEditors
 * Description: user API 路由
 * FilePath: \koa-weibo\src\routes\api\user.js
 */

const Router = require('koa-router')
const { isExist, register } = require('../../controller/user')
// const router = new Router()
const router = Router()

router.prefix('/api/user')

// 注册接口
router.post('/register', async ctx => {
    const {
        userName,
        password,
        gender
    } = ctx.request.body
    ctx.body = await register({
        userName,
        password,
        gender
    })
})

// 用户名是否存在
router.post('/isExist', async ctx => {
    const { userName } = ctx.request.body
    ctx.body = await isExist(userName)
})

module.exports = router