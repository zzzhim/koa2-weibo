/*
 * Author: your name
 * Date: 2020-02-14 23:11:39
 * LastEditTime: 2020-02-14 23:29:38
 * LastEditors: Please set LastEditors
 * Description: 个人主页
 * FilePath: \koa-weibo\src\controller\blog-profile.js
 */

const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { getBlogListByUser } = require('../services/blog')

class BlogProfile {

    static PAGE_SIZE = 5

    /**
     *
     * 获取个人主页微博列表
     * @param {*} userName
     * @param {number} [pageIndex=0]
     * @memberof BlogProfile
     */
    async getProfileBlogList(userName, pageIndex = 0) {
        const result = await getBlogListByUser({
            userName,
            pageIndex,
            pageSize: BlogProfile.PAGE_SIZE
        })

        const { count, blogList } = result

        return new SuccessModel({
            isEmpty: blogList.length === 0,
            blogList,
            pageSize: BlogProfile.PAGE_SIZE,
            pageIndex,
            count: count
        })
    }
}

module.exports = new BlogProfile()