/*
 * Author: your name
 * Date: 2020-02-01 01:03:40
 * LastEditTime: 2020-02-03 20:57:44
 * LastEditors: Please set LastEditors
 * Description: user API 路由
 * FilePath: \koa-weibo\src\routes\api\user.js
 */

const Router = require('koa-router')
const { isExist, register, login } = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')

const router = new Router()

router.prefix('/api/user')

// 注册接口
router.post('/register', genValidator(userValidate), async ctx => {
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

// 登录
router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body
    ctx.body = await login(ctx, userName, password)
})

module.exports = router