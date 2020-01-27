/*
 * Author: your name
 * Date: 2020-01-27 21:02:32
 * LastEditTime: 2020-01-27 22:08:33
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\model.js
 */
const Sequelize = require('sequelize')
const seq = require('./seq')

// 创建 User 模型。数据表名称为 users
const User = seq.define('user', {
    // id 会自动创建，并设为主键、自增
    userName: {
        type: Sequelize.STRING, // 默认 varchar(255)
        allowNull: false, // 是否能为空
        comment: '用户名' // 注释
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '用户密码'
    },
    nickName: {
        type: Sequelize.STRING,
        comment: '用户昵称'
    }
    // createdAt 和 updatedAt 会自动给我们添加
})

// 创建 Blog 模型
const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

// 外键关联
Blog.belongsTo(User, {
    // 创建外键 Blog.userId —> User.id
    foreignKey: 'userId',
})

User.hasMany(Blog, {
    // 创建外键 Blog.userId —> User.id
    foreignKey: 'userId',
})

module.exports = {
    User,
    Blog
}