/*
 * Author: your name
 * Date: 2020-02-02 20:47:27
 * LastEditTime: 2020-02-02 21:31:20
 * LastEditors: Please set LastEditors
 * Description: 验证
 * FilePath: \koa-weibo\src\validator\validate.js
 */

const Ajv = require('ajv')
const ajv = new Ajv({
    // allErrors: true // 输出所有的错误（速度比较慢）
})

/**
 *
 * json schema 校验
 * @param {*} schema json schema 规则
 * @param {*} [data={}] 代校验的数据
 */
function _validate(schema, data = {}) {
    const valid = ajv.validate(schema, data)

    if(!valid) {
        return ajv.errors[0]
    }
}

module.exports = _validate
