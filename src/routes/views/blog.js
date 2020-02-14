/*
 * Author: your name
 * Date: 2020-02-09 16:51:37
 * LastEditTime: 2020-02-15 00:22:38
 * LastEditors: Please set LastEditors
 * Description: 微博 view 路由
 * FilePath: \koa-weibo\src\routes\views\blog.js
 */

const Router = require('koa-router')
const { loginRedirect } = require('../../middlewares/lofinChecks')
const { getProfileBlogList } = require('../../controller/blog-profile')
const { isExist } = require('../../controller/user')

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

router.get('/profile', loginRedirect, async ctx => {
    const { userName } = ctx.session.userInfo
    ctx.redirect(`/profile/${userName}`)
})

router.get('/profile/:userName', loginRedirect, async ctx => {
    // 已登陆用户的信息
    const myUserInfo = ctx.session.userInfo
    const myUserName = myUserInfo.userName

    let curUserInfo
    const { userName: curUserName } = ctx.params
    const isMe = myUserName === curUserName

    if(isMe) {
        // 是当前登录用户
        curUserInfo = myUserInfo
    }else {
        // 不是当前登录用户
        const existResult = await isExist(curUserName)
        if(existResult.status !== 200) {
            // 用户名不存在
            return
        }

        curUserInfo = existResult.data
    }

    // 获取微博第一页数据
    const result = await getProfileBlogList(curUserName, 0)
    const {
        isEmpty,
        blogList,
        pageSize,
        pageIndex,
        count
    } = result.data

    await ctx.render('profile', {
        blogData: {
            isEmpty,
            blogList,
            pageSize,
            pageIndex,
            count
        },
        userData: {
            userInfo: curUserInfo,
            isMe,
            fansData: {
                count: 0,
                list: []
            },
            followersData: {
                count: 0,
                list: []
            }
        }
    })
})

module.exports = router