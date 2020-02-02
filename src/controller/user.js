/*
 * Author: your name
 * Date: 2020-02-01 01:10:50
 * LastEditTime: 2020-02-02 20:22:33
 * LastEditors: Please set LastEditors
 * Description: user controller
 * FilePath: \koa-weibo\src\controller\user.js
 */

const {
    getUserInfo,
    createUser
} = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
    registerUserNameNotExistInfo,
    registerUserNameExistInfo,
    registerFailInfo
} = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp')

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

    /**
     *
     * 注册
     * @param {*} { userName, password, gender }
     * @memberof User
     */
    async register({ userName, password, gender }) {
        const userInfo = await getUserInfo(userName)

        if (userInfo) {
            // 用户名已存在
            return new ErrorModel(registerUserNameExistInfo)
        }
        
        try {
            password = doCrypto(password) // 密码加密
            await createUser({ userName, password, gender })

            return new SuccessModel()
        } catch (error) {
            console.error(error.message, error.stack)
            return new ErrorModel(registerFailInfo)
        }
    }
}

module.exports = new User()
