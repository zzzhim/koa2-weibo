/*
 * Author: your name
 * Date: 2020-02-09 17:19:20
 * LastEditTime: 2020-02-15 00:19:37
 * LastEditors: Please set LastEditors
 * Description: blog services
 * FilePath: \koa-weibo\src\services\blog.js
 */

const { Blog, User } = require('../db/model/index')
const { formatUser, formatBlog } = require('./_format')

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


    /**
     *
     * 获取指定用户微博列表
     * @param {*} { userName, pageIndex = 0,pageSize = 10 }
     * @memberof BlogServices
     */
    async getBlogListByUser({ userName, pageIndex = 0, pageSize = 10 }) {
        const userWhereOpts = {}
        if(userName) {
            userWhereOpts.userName = userName
        }

        const result = await Blog.findAndCountAll({
            limit: pageSize,
            offset: pageSize * pageIndex, // 跳过多少条
            order: [
                [ 'id', 'desc' ]
            ],
            include: [
                {
                    model: User,
                    attributes: [ 'userName', 'nickName', 'picture' ],
                    where: userWhereOpts
                }
            ]
        })

        let blogList = result.rows.map(row => row.dataValues)
        blogList = formatBlog(blogList) // 格式化时间
        blogList = blogList.map(blogItem => {
            const user = blogItem.user.dataValues
            blogItem.user = formatUser(user)
            return blogItem
        })
        return {
            count: result.count,
            blogList
        }
    }
}

module.exports = new BlogServices()