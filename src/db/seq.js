/*
 * Author: your name
 * Date: 2020-01-27 20:56:06
 * LastEditTime: 2020-02-04 20:56:39
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\seq.js
 */
const Sequelize = require('Sequelize')

const seq = new Sequelize('koa2-weibo', 'root', 'qq123456', {
    host: '127.0.0.1', // 数据库地址
    dialect: 'mysql', // 选择数据库
    // pool: {
    //     max: 5, // 连接池中最大连接数量
    //     min: 0, // 最小
    //     idle: 10000 // 如果一个连接池 10s 之内没有被使用，就会释放
    // }
})

module.exports = seq
