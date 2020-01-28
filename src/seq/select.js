/*
 * Author: your name
 * Date: 2020-01-27 22:11:47
 * LastEditTime: 2020-01-28 17:54:52
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
    // const blogListAndCount = await Blog.findAndCountAll({
    //     limit: 2, // 限制查询 2 条
    //     offset: 0, // 跳过多少条
    //     order: [
    //         [ 'id', 'desc' ]
    //     ]
    // })

    // console.log(blogListAndCount.count, blogListAndCount.rows.map(blog => blog.dataValues))

    // 连表查询1
    // const blogListWithUser = await Blog.findAndCountAll({
    //     order: [
    //         [ 'id', 'desc' ]
    //     ],
    //     include: [
    //         {
    //             model: User,
    //             attributes: [ 'userName', 'nickName' ],
    //             where: {
    //                 userName: 'zhangsan'
    //             }
    //         }
    //     ]
    // })

    // console.log(blogListWithUser)

    // console.log(blogListWithUser.count, blogListWithUser.rows.map(blog => {
    //     const blogVal = blog.dataValues
    //     blogVal.user = blogVal.user.dataValues
    //     return blogVal
    // }))

    // 连表查询2
    const userListWithBlog = await User.findAndCountAll({
        order: [
            [ 'id', 'desc' ]
        ],
        include: [
            {
                model: Blog,
                where: {
                    userId: 1
                }
            }
        ]
    })

    console.log(userListWithBlog.count, userListWithBlog.rows.map(user => {
        const userVal = user.dataValues
        userVal.blogs = userVal.blogs.map(blog => blog.dataValues)
        return userVal
    }))
})()