/*
 * Author: your name
 * Date: 2020-01-28 22:23:48
 * LastEditTime: 2020-01-28 22:28:26
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\test\json.test.js
 */
const server = require('./server')

test('测试接口', async () => {
    const res = await server.get('/json')

    expect(res.body).toEqual({
        title: 'koa2 json'
    })
})