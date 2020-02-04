/*
 * Author: your name
 * Date: 2020-02-04 18:14:28
 * LastEditTime: 2020-02-04 18:30:19
 * LastEditors: Please set LastEditors
 * Description: user api test
 * FilePath: \koa-weibo\test\user\login.test.js
 */

const server = require('../server')

// 用户信息
const userName = `user_${Date.now()}`
const password = `p_123asd`

const testUser = {
    userName,
    password,
    nickName: userName,
    gender: 1
}

// 存储 cookie
let COOKIE = ''

// 注册
test('注册一个用户，应该成功', async () => {
    const res = await server
        .post('/api/user/register')
        .send(testUser)

    // 成功
    expect(res.body.status).toBe(200)
})

// 重复注册
test('重复注册用户，应该失败 ', async () => {
    const res = await server
        .post('/api/user/register')
        .send(testUser)

    // 注册失败
    expect(res.body.status).not.toBe(200)
})

// 查询用户是否存在
test('查询注册的用户名，应该存在', async () => {
    const res = await server
        .post('/api/user/isExist')
        .send({ userName })

    // 存在
    expect(res.body.status).toBe(200)
})

// json schema 检测
test('json schema 检测，非法的格式，注册应该失败', async () => {
    const res = await server
        .post('/apt/user/register')
            .send({
                userName,
                password: '123456',
                gender: 'a'
            })

    
    expect(res.body.status).not.toBe(200)
})

// 登录
test('登录，应该成功', async () => {
    const res = await server
        .post('/api/user/login')
        .send({
            userName,
            password
        })

    // 登录成功
    expect(res.body.status).toBe(200)

    COOKIE = res.header['set-cookie'].join(';')
})

// 删除
test('删除用户，应该成功', async () => {
    const res = await server
        .post('/api/user/delete')
        .set('cookie', COOKIE)

    // 成功
    expect(res.body.status).toBe(200)
})

// 再次查询用户应该不存在
test('删除之后，再次查询注册的用户名，应该不存在', async () => {
    const res = await server
        .post('/api/user/isExist')
        .send({ userName })

    // 不存在
    expect(res.body.status).not.toBe(200)
})
