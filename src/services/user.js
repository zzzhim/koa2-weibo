/*
 * Author: your name
 * Date: 2020-02-01 01:16:03
 * LastEditTime: 2020-02-01 01:27:29
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
        // 查询条件
        let whereOpt = {
            userName
        }

        if(password) {
            whereOpt = { ...whereOpt, password }
        }

        const result = await User.findOne({
            attributes: [ 'id', 'userName', 'nickName', 'picture', 'city' ],
            where: whereOpt
        })

        if(result === null) {
            // 未找到
            return result
        }else {
            // 格式化
            return result.dataValues
        }
    }
}

module.exports = new User()
