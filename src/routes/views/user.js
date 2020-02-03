/*
 * Author: your name
 * Date: 2020-02-01 00:31:43
 * LastEditTime: 2020-02-03 20:51:15
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\routes\views\user.js
 */

const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx, next) => {
    await ctx.render('register', {})
})

router.get('/login', async (ctx, next) => {
    await ctx.render('login', {})
})

router.get('/register', async (ctx, next) => {
    await ctx.render('register', {})
})

module.exports = router
