/*
 * Author: your name
 * Date: 2020-01-30 20:14:49
 * LastEditTime: 2020-01-30 20:36:30
 * LastEditors: Please set LastEditors
 * Description: error 404 路由
 * FilePath: \koa-weibo\src\routes\views\error.js
 */

const router = require('koa-router')()


router.get('/error', async (ctx, next) => {
    await ctx.render('error')
})

/** 
 * 404
 * @return 
 */
router.get('/*', async(ctx, next) => {
    // throw new Error(11)
    await ctx.render('404')
})

module.exports = router