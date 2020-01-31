/*
 * Author: your name
 * Date: 2020-02-01 01:10:50
 * LastEditTime: 2020-02-01 01:15:48
 * LastEditors: Please set LastEditors
 * Description: user controller
 * FilePath: \koa-weibo\src\controller\user.js
 */

class User {
    constructor() {
        super()
    }

    /**
     *
     * 用户名是否存在
     * @param {string} userName 用户名
     * @memberof User
     */
    async isExist(userName) {
        // 业务逻辑处理 (无)
        // 调用 services 获取数据
        // 统一返回数据
    }
}

module.exports = new User()