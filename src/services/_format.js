/*
 * Author: your name
 * Date: 2020-02-01 01:27:43
 * LastEditTime: 2020-02-15 00:23:27
 * LastEditors: Please set LastEditors
 * Description: 数据格式化
 * FilePath: \koa-weibo\src\services\_format.js
 */

const { PICTURE } = require('../config/picture')
const { _timeFormat } = require('../utils/dt')

/**
 *
 * 用户默认头像
 * @param {Object} params
 * @returns
 */
function _formatUserPicture(params) {
    if(params.picture === null) {
        params.picture = PICTURE
    }
    return params
}

/**
 *
 * 格式化用户信息
 * @param {Array|Object} list 列表或单个对象
 */
function formatUser(list) {
    if(list ===  null) {
        return
    }

    if(list instanceof Array) {
        return list.map(_formatUserPicture)
    }
    
    // 如果是对象
    return _formatUserPicture(list)
}

/**
 *
 * 格式化数据的时间
 * @param {*} obj
 */
function _formatDBTime(obj) {
    obj.createdAtFormat = _timeFormat(obj.createdAt)
    obj.updatedAtFormat = _timeFormat(obj.updatedAt)
    return obj
}

/**
 *
 * 格式化博客信息
 * @param {Array|Object} list 数组或对象
 */
function formatBlog(list) {
    if(list == null) {
        return list
    }

    if(list instanceof Array) {
        return list.map(_formatDBTime)
    }

    return _formatDBTime(list)
}

module.exports = {
    formatUser,
    formatBlog
}