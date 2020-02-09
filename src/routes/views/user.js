/*
 * Author: your name
 * Date: 2020-02-01 00:31:43
 * LastEditTime: 2020-02-09 16:56:28
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\routes\views\user.js
 */

const Router = require('koa-router')
const { loginRedirect } = require('../../middlewares/lofinChecks')

const router = new Router()

router.get('/login', async (ctx, next) => {
    // const userInfo = await ctx.session.userInfo

    await ctx.render('login', {
        // locals: {
        //     ...(userInfo instanceof Object ? userInfo : {}),
        //     isLogin: userInfo instanceof Object
        // }
        ...(await getLoginInfo(ctx))
    })
})

router.get('/register', async (ctx, next) => {
    await ctx.render('register', await getLoginInfo(ctx))
})

router.get('/setting', loginRedirect, async (ctx, next) => {
    await ctx.render('setting', ctx.session.userInfo)
})

module.exports = router

async function getLoginInfo(ctx) {
    let data = {
        isLogin: false
    }

    const userInfo = await ctx.session.userInfo

    if(userInfo) {
        data = {
            isLogin: true,
            ...userInfo
        }
    }
    console.log(data)
    return data
}