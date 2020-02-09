/*
 * Author: your name
 * Date: 2020-02-09 17:19:20
 * LastEditTime: 2020-02-09 17:22:12
 * LastEditors: Please set LastEditors
 * Description: blog services
 * FilePath: \koa-weibo\src\services\blog.js
 */

const { Blog } = require('../db/model/index')

class BlogServices {
    
    /**
     *
     * 创建微博
     * @param {*} { userId, content, image }
     * @memberof BlogServices
     */
    async createBlog({ userId, content, image }) {
        const result = await Blog.create({
            userId,
            content,
            image
        })

        return result.dataValues
    }
}

module.exports = new BlogServices()