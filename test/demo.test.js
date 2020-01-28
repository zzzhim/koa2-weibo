/*
 * Author: your name
 * Date: 2020-01-28 21:57:12
 * LastEditTime: 2020-01-28 21:59:19
 * LastEditors: Please set LastEditors
 * Description: test demo
 * FilePath: \koa-weibo\src\test\demo.test.js
 */

function sum(a, b) {
    return a + b
}

test('test demo1', () => {
    const res = sum(10, 20)
    expect(res).toBe(30)
})