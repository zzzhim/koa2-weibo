/*
 * Author: your name
 * Date: 2020-02-02 20:02:23
 * LastEditTime: 2020-02-02 20:21:14
 * LastEditors: Please set LastEditors
 * Description: 加密方法
 * FilePath: \koa-weibo\src\utils\cryp.js
 */

const crypto = require('crypto')
// 密钥
const { CRYPTO_SECRET_KEY } = require('../config/jwt')

/**
 *
 * md5 加密
 * @param {*} params
 * @returns
 */
function _md5(params) {
    return crypto
            .createHash('md5')
            .update(params)
            .digest("hex")
}

/**
 *
 * 加密方法
 * @param {*} params
 * @returns {string} 加密结果
 */
function doCrypto(params) {
    const str = `password=${params}&key=${CRYPTO_SECRET_KEY}`
    return _md5(str)
}

module.exports = doCrypto
