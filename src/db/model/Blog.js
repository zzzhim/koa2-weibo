/*
 * Author: your name
 * Date: 2020-02-09 16:30:35
 * LastEditTime: 2020-02-09 16:37:05
 * LastEditors: Please set LastEditors
 * Description: 微博数据模型
 * FilePath: \koa-weibo\src\db\model\Blog.js
 */

const seq = require('../seq')
const { INTEGER, STRING, TEXT, } = require('../type')

const Blog = seq.define('blog', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '用户 ID'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '微博内容'
    },
    image: {
        type: STRING,
        comment: '图片地址'
    }
})

module.exports = Blog