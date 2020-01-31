/*
 * Author: your name
 * Date: 2020-02-01 01:16:03
 * LastEditTime: 2020-02-01 01:21:05
 * LastEditors: Please set LastEditors
 * Description: user service
 * FilePath: \koa-weibo\src\services\user.js
 */

const { User } = require('../db/model/index')

class User {
    constructor() {
        super()
    }

    /**
     *
     * 获取用户信息
     * @param {string} userName 用户名
     * @param {string} password 密码
     * @memberof User
     */
    async getUserInfo(userName, password) {

    }
}

module.exports = new User()
