/*
 * Author: your name
 * Date: 2020-02-01 01:27:43
 * LastEditTime: 2020-02-01 01:35:18
 * LastEditors: Please set LastEditors
 * Description: 数据格式化
 * FilePath: \koa-weibo\src\services\_format.js
 */


/**
 *
 * 用户默认头像
 * @param {Object} params
 * @returns
 */
function _formatUserPicture(params) {
    if(params.picture === null) {
        params.picture = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
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

module.exports = {
    formatUser
}