/*
 * Author: your name
 * Date: 2020-02-01 14:44:22
 * LastEditTime: 2020-02-02 21:25:45
 * LastEditors: Please set LastEditors
 * Description: 失败信息集合
 * FilePath: \koa-weibo\src\model\ErrorInfo.js
 */

module.exports = {
    // 用户名不存在
    registerUserNameNotExistInfo: {
        status: 10003,
        message: '用户名不存在'
    },
    // 用户名已存在
    registerUserNameExistInfo: {
        status: 10001,
        message: '用户名已存在'
    },
    // 注册失败
    registerFailInfo: {
        status: 10002,
        message: '注册失败，请重试'
    },
    // 登录失败
    loginFailInfo: {
        status: 10004,
        message: '登录失败，用户名或密码错误'
    },
    // 未登录
    loginCheckFailInfo: {
        status: 10005,
        message: '您尚未登录'
    },
    // 修改密码失败
    changePasswordFailInfo: {
        status: 10006,
        message: '修改密码失败，请重试'
    },
    // 上传文件过大
    uploadFileSizeFailInfo: {
        status: 10007,
        message: '上传文件尺寸过大'
    },
    // 修改基本信息失败
    changeInfoFailInfo: {
        status: 10008,
        message: '修改基本信息失败'
    },
    // json schema 校验失败
    jsonSchemaFileInfo: {
        status: 10009,
        message: '数据格式校验错误'
    },
    // 删除用户失败
    deleteUserFailInfo: {
        status: 10010,
        message: '删除用户失败'
    },
    // 添加关注失败
    addFollowerFailInfo: {
        status: 10011,
        message: '添加关注失败'
    },
    // 取消关注失败
    deleteFollowerFailInfo: {
        status: 10012,
        message: '取消关注失败'
    },
    // 创建微博失败
    createBlogFailInfo: {
        status: 11001,
        message: '创建微博失败，请重试'
    },
    // 删除微博失败
    deleteBlogFailInfo: {
        status: 11002,
        message: '删除微博失败，请重试'
    }
}
