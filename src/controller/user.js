/*
 * Author: your name
 * Date: 2020-02-01 01:10:50
 * LastEditTime: 2020-02-08 00:03:20
 * LastEditors: Please set LastEditors
 * Description: user controller
 * FilePath: \koa-weibo\src\controller\user.js
 */

const {
    getUserInfo,
    createUser,
    deleteUser,
    updateUser
} = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
    registerUserNameNotExistInfo,
    registerUserNameExistInfo,
    registerFailInfo,
    loginFailInfo,
    deleteUserFailInfo,
    changeInfoFailInfo
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

    /**
     *
     * 登录
     * @param {*} ctx koa2 ctx
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @memberof User
     */
    async login(ctx, userName, password) {
        // 获取用户信息
        const userInfo = await getUserInfo(userName, doCrypto(password))

        if(userInfo) {
            // 登录成功
            const session = await ctx.session
            if(session.userInfo === null || session.userInfo === undefined) {
                session.userInfo = userInfo
            }

            return new SuccessModel()
        }else {
            // 登录失败
            return new ErrorModel(loginFailInfo)
        }
    }

    /**
     *
     * 删除当前用户
     * @param {*} userName
     * @memberof User
     */
    async delectCurUser(userName) {
        const result = await deleteUser(userName)

        // 成功
        if(result) {
            return new SuccessModel()
        }

        // 失败
        return new ErrorModel(deleteUserFailInfo)
    }

    /**
     *
     * 修改个人信息
     * @param {*} ctx
     * @param {*} { nickName, city, picture }
     * @memberof User
     */
    async changeInfo(ctx, { nickName, city, picture }) {
        const { userName } = ctx.session.userInfo
        if(!nickName) {
            nickName = userName
        }

        const result = await updateUser(
            {
                newNickName: nickName,
                newCity: city,
                newPicture: picture
            },
            { userName }
        )

        if(result) {
            // 执行成功
            ctx.session.userInfo = { ...ctx.session.userInfo, nickName, city, picture }
            return new SuccessModel()
        }

        return new ErrorModel(changeInfoFailInfo)
    }
}

module.exports = new User()
