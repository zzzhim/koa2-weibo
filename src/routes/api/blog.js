/*
 * Author: your name
 * Date: 2020-02-09 17:12:26
 * LastEditTime: 2020-02-09 17:32:08
 * LastEditors: Please set LastEditors
 * Description: 首页 API 路由
 * FilePath: \koa-weibo\src\routes\api\blog.js
 */

const Router = require('koa-router')
const { loginCheck } = require('../../middlewares/lofinChecks')
const { create } = require('../../controller/blog-home')

const router = new Router()

router.prefix('/api/blog')

// 创建微博
router.post('/create', loginCheck, async ctx => {
    const { content, image } = ctx.request.body
    const { id: userId } = ctx.session.userInfo

    ctx.body = await create({
        userId,
        content,
        image
    })
})

module.exports = router
