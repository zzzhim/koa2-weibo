/*
 * Author: your name
 * Date: 2020-01-27 21:10:55
 * LastEditTime: 2020-02-01 00:52:23
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\sync.js
 */
const seq = require('./seq')

require('./model/index')

// 测试连接是否成功
seq.authenticate().then(() => {
    console.log('ok')
}).catch((err) => {
    console.log('err', err)
})

// 执行同步
seq.sync({
    force: true
}).then(() => {
    console.log('sync ok')
    process.exit()
})
