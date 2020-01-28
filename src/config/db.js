/*
 * Author: your name
 * Date: 2020-01-28 19:57:32
 * LastEditTime: 2020-01-28 20:13:46
 * LastEditors: Please set LastEditors
 * Description: 存储配置
 * FilePath: \koa-weibo\src\config\db.js
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    prot: 6379,
    host: '127.0.0.1'
}

// 线上的 redis 配置
if(isProd) {
    
}

module.exports = {
    REDIS_CONF
}