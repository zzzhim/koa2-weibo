/*
 * Author: your name
 * Date: 2020-01-28 20:00:35
 * LastEditTime: 2020-01-28 20:30:12
 * LastEditors: Please set LastEditors
 * Description: 连接 redis 的方法
 * FilePath: \koa-weibo\src\cache\_redis.js
 */

const redis = require('redis')

const { REDIS_CONF } = require('../config/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.prot, REDIS_CONF.host)

redisClient.on('error', err => {
    console.log("Redis Error: " + err);
})


/**
 *
 * @description 设置
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} [timeout=60 * 60] 过期时间
 */
function set(key, val, timeout = 60 * 60) {
    if(typeof val === 'object') {
        val = JSON.stringify(val)
    }

    redisClient.set(key, val)
    redisClient.expire(key, timeout)
}


/**
 *
 * @description 获取
 * @param {string} key 键
 */
function get(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if(err) {
                reject(err)
                return
            }

            if(val === null) {
                resolve(null)
                return
            }

            try {
                resolve(JSON.parse(val))
            } catch(err) {
                resolve(val)
            }
        })
    })
}

module.exports = {
    set,
    get
}
