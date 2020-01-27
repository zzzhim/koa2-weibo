/*
 * Author: your name
 * Date: 2020-01-27 22:11:47
 * LastEditTime: 2020-01-27 22:42:29
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\select.js
 */
const { Blog, User } = require('./model')

!(async () => {
    // 查询一条记录
    // const zhangsan = await User.findOne({
    //     where: {
    //         userName: 'zhangsan'
    //     }
    // })

    // console.log(zhangsan)

    // 查询特定的列
    // const zhangsanName = await User.findOne({
    //     attributes: [ 'userName', 'nickName' ],
    //     where: {
    //         userName: 'zhangsan'
    //     }
    // })

    // console.log(zhangsanName.dataValues)

    // 查询一个列表
    // const zhangsanBlogList = await Blog.findAll({
    //     where: {
    //         userId: 1
    //     },
    //     order: [
    //         [ 'id', 'desc' ]
    //     ]
    // })

    // console.log(zhangsanBlogList.map(item => item.dataValues))

    // 分页
    // const blogPageList = await Blog.findAll({
    //     limit: 2, // 限制查询 2 条
    //     offset: 0, // 跳过多少条
    //     order: [
    //         [ 'id', 'desc' ]
    //     ]
    // })

    // console.log(blogPageList.map(blog => blog.dataValues))

    // 查询总数
    const blogListAndCount = await Blog.findAndCountAll({
        limit: 2, // 限制查询 2 条
        offset: 0, // 跳过多少条
        order: [
            [ 'id', 'desc' ]
        ]
    })

    console.log(blogListAndCount.count, blogListAndCount.rows.map(blog => blog.dataValues))
})()