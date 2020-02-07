/*
 * Author: your name
 * Date: 2020-02-01 01:03:40
 * LastEditTime: 2020-02-08 00:33:31
 * LastEditors: Please set LastEditors
 * Description: user API 路由
 * FilePath: \koa-weibo\src\routes\api\user.js
 */

const Router = require('koa-router')
const {
    isExist,
    register,
    login,
    delectCurUser,
    changeInfo,
    changePassword,
    logout
} = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
const { isTest } = require('../../utils/env')
const { loginCheck } = require('../../middlewares/lofinChecks')

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

// 删除用户
router.post('/delete', loginCheck, async ctx => {
    if(isTest) {
        // 测试环境下，测试账号登录之后，删除自己
        const { userName } = ctx.session.userInfo
        ctx.body = await delectCurUser(userName)
    }
})

// 修改个人信息
router.patch('/changeInfo', loginCheck, genValidator(userValidate), async ctx => {
    const { nickName, city, picture } = ctx.request.body

    ctx.body = await changeInfo(ctx, {
        nickName,
        city,
        picture
    })
})

// 修改密码
router.patch('/changePassword', loginCheck, genValidator(userValidate), async ctx => {
    const { password, newPassword } = ctx.request.body
    const { userName } = ctx.session.userInfo

    ctx.body = await changePassword({
        userName,
        password,
        newPassword
    })
})

// 退出登录
router.post('/logout', loginCheck, async ctx => {
    ctx.body = await logout(ctx)
})

module.exports = router
