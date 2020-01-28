/*
 * Author: your name
 * Date: 2020-01-28 18:01:27
 * LastEditTime: 2020-01-28 18:10:32
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\delete.js
 */

const { Blog, User } = require('./model')

!(async () => {
    // 删除一条博客
    // const delBlogs = await Blog.destroy(
    //     {
    //         where: {
    //             id: 4
    //         }
    //     }
    // )

    // console.log(delBlogs)

    // 删除一个用户
    const delUser = await User.destroy(
        {
            where: {
                id: 1
            }
        }
    )

    // 这里会删除失败，这是因为sequelize设置外键的时候，把userId的删除模式设置为了 'RESTRICT', 这里改为 'CASCADE' 就可以正常操作了。
    console.log(delUser)
})()
