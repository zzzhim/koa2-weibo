/*
 * Author: your name
 * Date: 2020-01-27 20:56:06
 * LastEditTime: 2020-01-27 21:12:50
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\seq\seq.js
 */
const Sequelize = require('Sequelize')

const seq = new Sequelize('koa2-weibo', 'root', 'qq123456', {
    host: '127.0.0.1', // 数据库地址
    dialect: 'mysql' // 选择数据库
})

module.exports = seq
