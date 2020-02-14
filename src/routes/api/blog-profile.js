/*
 * Author: your name
 * Date: 2020-02-15 00:36:39
 * LastEditTime: 2020-02-15 01:02:09
 * LastEditors: Please set LastEditors
 * Description: 个人主页 API 路由
 * FilePath: \koa-weibo\src\routes\api\blog-profile.js
 */

const Router = require('koa-router')
const { loginCheck } = require('../../middlewares/lofinChecks')
const { getProfileBlogList } = require('../../controller/blog-profile')
const { getBlogListStr } = require('../../utils/blog')

const router = new Router()

router.prefix('/api/profile')

// 加载更多
router.get('/loadMore/:userName/:pageIndex', loginCheck, async ctx => {
    let { userName, pageIndex } = ctx.params
    pageIndex = parseInt(pageIndex)
    const result = await getProfileBlogList(userName, pageIndex)
    // 渲染为 HTML 字符串
    result.data.blogListTpl = getBlogListStr(result.data.blogList)
    ctx.body = result
})

module.exports = router