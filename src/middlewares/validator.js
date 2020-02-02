/*
 * Author: your name
 * Date: 2020-02-02 21:16:09
 * LastEditTime: 2020-02-02 21:26:27
 * LastEditors: Please set LastEditors
 * Description: json schema 中间件
 * FilePath: \koa-weibo\src\middlewares\validator.js
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

/**
 *
 * 生成json schema 验证的中间件
 * @param {function} validateFun 验证函数
 * @returns
 */
function genValidator(validateFun) {
    async function validator(ctx, next) {
        const data = ctx.request.body
        // 校验
        const error = validateFun(data)
        if(error) {
            // 验证失败
            ctx.body = new ErrorModel(jsonSchemaFileInfo)
            return 
        }

        // 验证成功继续
        await next()
    }

    // 返回中间件
    return validator
}

module.exports = {
    genValidator
}