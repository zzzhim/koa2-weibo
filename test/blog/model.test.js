/*
 * Author: your name
 * Date: 2020-02-09 17:59:46
 * LastEditTime: 2020-02-09 18:08:47
 * LastEditors: Please set LastEditors
 * Description: 微博数据模型单元测试
 * FilePath: \koa-weibo\test\blog\model.test.js
 */

const Blog = require('../../src/db/model/Blog')

test('微博数据模型各个属性，符合预期', () => {
    const blog = Blog.build({
        userId: 1,
        content: '微博内容',
        image: '/test.png'
    })

    // 验证各个属性
    expect(blog.userId).toBe(1)
    expect(blog.content).toBe('微博内容')
    expect(blog.image).toBe('/test.png')
})