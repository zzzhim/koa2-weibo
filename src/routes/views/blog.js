/*
 * Author: your name
 * Date: 2020-02-09 16:51:37
 * LastEditTime: 2020-02-09 17:03:07
 * LastEditors: Please set LastEditors
 * Description: 微博 view 路由
 * FilePath: \koa-weibo\src\routes\views\blog.js
 */

const Router = require('koa-router')
const { loginRedirect } = require('../../middlewares/lofinChecks')

const router = new Router()

router.get('/', loginRedirect, async ctx => {
    await ctx.render('index', {
        blogData: {
            blogList: []
        },
        userData: {
            userInfo: {},
            fansData: {
                list: []
            },
            followersData: {
                list: []
            }
        }
    })
})

module.exports = router