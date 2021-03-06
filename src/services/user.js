/*
 * Author: your name
 * Date: 2020-02-01 01:16:03
 * LastEditTime: 2020-02-07 23:30:35
 * LastEditors: Please set LastEditors
 * Description: user service
 * FilePath: \koa-weibo\src\services\user.js
 */

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')

class UserServices {
    constructor() {
        // super()
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
            return formatUser(result.dataValues)
        }
    }

    /**
     *
     * 创建用户
     * @param {*} { userName, password, gender = 3, nickName }
     * @memberof UserServices
     */
    async createUser({ userName, password, gender = 3, nickName }) {
        const result = await User.create({
            userName,
            password,
            gender,
            nickName: nickName ? nickName : userName
        })

        return result.dataValues
    }

    /**
     *
     * 删除用户
     * @param {*} userName
     * @memberof UserServices
     */
    async deleteUser(userName) {
        const result = await User.destroy({
            where: {
                userName
            }
        })

        // 删除的行数是否大于0
        return result > 0
    }

    /**
     *
     * 更新用户信息
     * @param {*} { newPassword, newNickName, newPicture, newCity }
     * @param {*} { userName, password }
     * @memberof UserServices
     */
    async updateUser({ newPassword, newNickName, newPicture, newCity }, { userName, password }) {
        // 拼接修改内容
        const updateData = {}
        if(newPassword) {
            updateData.password = newPassword
        }

        if(newNickName) {
            updateData.nickName = newNickName
        }

        if(newPicture) {
            updateData.picture = newPicture
        }

        if(newCity) {
            updateData.city = newCity
        }

        // 拼接修改条件
        const whereData = {
            userName
        }

        if(password) {
            whereData.password = password
        }

        // 执行修改
        const result = await User.update(updateData, {
            where: whereData
        })

        return result[0] > 0
    }
}

module.exports = new UserServices()
