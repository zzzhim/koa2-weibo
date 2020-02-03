/*
 * Author: your name
 * Date: 2020-02-04 01:02:27
 * LastEditTime: 2020-02-04 01:12:56
 * LastEditors: Please set LastEditors
 * Description: 登录验证的中间件
 * FilePath: \koa-weibo\src\middlewares\lofinChecks.js
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

/**
 *
 * API 登录验证
 * @param {*} ctx
 * @param {*} next
 */
async function loginCheck(ctx, next) {
    const session = await ctx.session
    if(session && session.userInfo) {
        // 已登录
        await next()
        return
    }

    // 未登录
    ctx.body = new ErrorModel(jsonSchemaFileInfo)
}

/**
 *
 * 页面登录验证
 * @param {*} ctx
 * @param {*} next
 */
async function loginRedirect(ctx, next) {
    const session = await ctx.session
    if(session && session.userInfo) {
        // 已登录
        await next()
        return
    }

    // 未登录
    const curUrl = ctx.url
    ctx.redirect(`/login?url${encodeURIComponent(curUrl)}`)
}

module.exports = {
    loginCheck,
    loginRedirect
}