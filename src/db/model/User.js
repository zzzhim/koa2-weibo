/*
 * Author: your name
 * Date: 2020-02-01 00:41:32
 * LastEditTime: 2020-02-01 00:51:20
 * LastEditors: Please set LastEditors
 * Description: 用户数据模型
 * FilePath: \koa-weibo\src\db\model\User.js
 */

const seq = require('../seq')
const {
    STRING,
    DECIMAL
} = require('../type')

const User = seq.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true, // 是否唯一
        comment: '唯一用户名'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: STRING,
        allowNull: false,
        comment: '昵称'
    },
    gender: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 3,
        comment: '性别（1 男性，2 女性，3 保密）'
    },
    picture: {
        type: STRING,
        allowNull: false,
        comment: '头像图片地址'
    },
    city: {
        type: STRING,
        comment: '城市'
    }
})

module.exports = User