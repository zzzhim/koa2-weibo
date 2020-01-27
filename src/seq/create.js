/*
 * Author: your name
 * Date: 2020-01-27 21:32:10
 * LastEditTime: 2020-01-27 22:19:52
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\create.js
 */

// insert ... 语句
const { Blog, User } = require('./model')

!(async () => {
    // 创建数据
    const zhangsan = await User.create({
        userName: 'zhangsan',
        password: '123',
        nickName: '张三'
    })

    console.log(zhangsan.dataValues)

    const lisi = await User.create({
        userName: 'lisi',
        password: '123',
        nickName: '李四'
    })

    console.log(lisi.dataValues)

    await Blog.create({
        title: '这是一个文章1',
        content: '文章内容',
        userId: zhangsan.dataValues.id
    })

    await Blog.create({
        title: '这是一个文章2',
        content: '文章内容',
        userId: zhangsan.dataValues.id
    })

    await Blog.create({
        title: '这是一个文章3',
        content: '文章内容',
        userId: zhangsan.dataValues.id
    })

    await Blog.create({
        title: '这是一个文章1',
        content: '文章内容',
        userId: lisi.dataValues.id
    })

    await Blog.create({
        title: '这是一个文章2',
        content: '文章内容',
        userId: lisi.dataValues.id
    })

    await Blog.create({
        title: '这是一个文章3',
        content: '文章内容',
        userId: lisi.dataValues.id
    })

})()
