/*
 * Author: your name
 * Date: 2020-02-01 00:51:27
 * LastEditTime: 2020-02-09 16:36:15
 * LastEditors: Please set LastEditors
 * Description: 数据模型入口文件
 * FilePath: \koa-weibo\src\db\model\index.js
 */

const User = require('./User')
const Blog = require('./Blog')

Blog.belongsTo(User, {
    foreignKey: 'userId'
})

module.exports = {
    User,
    Blog
}