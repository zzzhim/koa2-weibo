/*
 * Author: your name
 * Date: 2020-01-28 17:56:01
 * LastEditTime: 2020-01-28 18:01:07
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\update.js
 */

const { User } = require('./model')

!(async () => {
    // 修改
    const updateRes = await User.update(
        {
            nickName: '张三1'
        },
        {
            where: {
                userName: 'zhangsan'
            }
        }
    )

    console.log(updateRes)
})()
