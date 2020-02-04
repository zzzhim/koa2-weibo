/*
 * Author: your name
 * Date: 2020-02-04 17:56:09
 * LastEditTime: 2020-02-04 18:03:08
 * LastEditors: Please set LastEditors
 * Description: user model test
 * FilePath: \koa-weibo\test\user\model.test.js
 */

const { User } = require('../../src/db/model/index')

test('User 模型的各个属性，符合预期', () => {
    // build 会构建一个内存的 User 实例，但不会提交到数据库中
    const user = User.build({
        userName: 'zzzhim',
        password: 'a123456',
        nickName: 'zzzhim',
        // gender: 1,
        picture: '/xxx.png',
        city: '北京'
    })

    // 验证各个属性
    expect(user.userName).toBe('zzzhim')
    expect(user.password).toBe('a123456')
    expect(user.nickName).toBe('zzzhim')
    expect(user.gender).toBe(3) // 测试默认值
    expect(user.picture).toBe('/xxx.png')
    expect(user.city).toBe('北京')
})