/*
 * Author: your name
 * Date: 2020-02-09 17:17:08
 * LastEditTime: 2020-02-09 17:25:57
 * LastEditors: Please set LastEditors
 * Description: 首页 controller
 * FilePath: \koa-weibo\src\controller\blog-home.js
 */

const { createBlog } = require('../services/blog')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { createBlogFailInfo } = require('../model/ErrorInfo')

class BlogHomeController {

    /**
     *
     * 创建微博
     * @param {*} { userId, content, image }
     * @memberof BlogHomeController
     */
    async create({ userId, content, image }) {
        try {
            const blog = await createBlog({ userId, content, image })
            return new SuccessModel(blog)
        } catch (error) {
            console.error(error.message, error.stack)
            return new ErrorModel(createBlogFailInfo)
        }
    }
}

module.exports = new BlogHomeController()