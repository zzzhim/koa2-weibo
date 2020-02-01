/*
 * Author: your name
 * Date: 2020-02-01 01:10:50
 * LastEditTime: 2020-02-01 15:03:41
 * LastEditors: Please set LastEditors
 * Description: user controller
 * FilePath: \koa-weibo\src\controller\user.js
 */

const { getUserInfo } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameNotExistInfo } = require('../model/ErrorInfo')

class User {
    constructor() {
        // super()
    }

    /**
     *
     * 用户名是否存在
     * @param {string} userName 用户名
     * @memberof User
     */
    async isExist(userName) {
        const userInfo = await getUserInfo(userName)
        if(userInfo) {
            // 用户名已存在
            return new SuccessModel(userInfo)
        }else {
            // 用户名不存在
            return new ErrorModel(registerUserNameNotExistInfo)
        }
    }
}

module.exports = new User()