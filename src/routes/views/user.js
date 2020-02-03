/*
 * Author: your name
 * Date: 2020-02-01 00:31:43
 * LastEditTime: 2020-02-04 01:13:50
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\routes\views\user.js
 */

const Router = require('koa-router')
const { loginRedirect } = require('../../middlewares/lofinChecks')

const router = new Router()

router.get('/', loginRedirect, async (ctx, next) => {
    let session = await ctx.session

    if(session.viewNum === null) {
        session.viewNum = 0
    }

    ++session.viewNum

    await ctx.render('ejsDemo', {
        title: 'Hello Koa 2!',
        isMe: false,
        list: [
            {
                id: 1,
                title: "a"
            },
            {
                id: 2,
                title: "b"
            },
            {
                id: 3,
                title: "c"
            }
        ],
        viewNum: session.viewNum
    })
})

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