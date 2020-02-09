/*
 * Author: your name
 * Date: 2020-02-09 18:09:37
 * LastEditTime: 2020-02-09 18:21:16
 * LastEditors: Please set LastEditors
 * Description: 首页 test
 * FilePath: \koa-weibo\test\blog\home.test.js
 */

const server = require('../server')
const { COOKIE } = require('../testUserInfo')
// 微博ID
let BLOG_ID = ''

test('创建一条微博，应该成功', async () => {
    // 定义测试内容
    const content = '单元测试自动创建的微博_' + Date.now()
    const image = '/xxx.png'

    // 开始测试
    const res = await server
        .post('/api/blog/create')
        .send({
            content,
            image
        })
        .set('cookie', COOKIE)
    
    expect(res.body.status).toBe(200)
    expect(res.body.data.content).toBe(content)
    expect(res.body.data.image).toBe(image)

    BLOG_ID = res.body.data.id
})
