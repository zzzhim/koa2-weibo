/*
 * Author: your name
 * Date: 2020-02-01 01:03:40
 * LastEditTime: 2020-02-01 01:14:48
 * LastEditors: Please set LastEditors
 * Description: user API 路由
 * FilePath: \koa-weibo\src\routes\api\user.js
 */

const Router = require('koa-router')
const { isExist } = require('../../controller/user')
const router = new Router()

router.prefix('/api/user')

// 注册路由
router.get('/register', async ctx => {

})

// 用户名是否存在
router.get('/isExist', async ctx => {
    const { userName } = ctx.request.body
    
})

module.exports = router