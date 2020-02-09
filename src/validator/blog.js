/*
 * Author: your name
 * Date: 2020-02-09 17:50:40
 * LastEditTime: 2020-02-09 17:56:45
 * LastEditors: Please set LastEditors
 * Description: 微博数据格式校验
 * FilePath: \koa-weibo\src\validator\blog.js
 */

const _validate = require('./validate')

// 校验规则
const SCHEMA = {
    type: 'object',
    properties: {
        content: {
            type: 'string'
        },
        image: {
            type: 'string',
            maxLength: 255
        }
    }
}

/**
 * 校验微博数据格式
 * @param {Object} data 微博数据
 */
function blogValidate(data = {}) {
    return _validate(SCHEMA, data)
}

module.exports = blogValidate
