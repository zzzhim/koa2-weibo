/*
 * Author: your name
 * Date: 2020-01-28 22:21:48
 * LastEditTime: 2020-01-28 22:23:38
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\test\server.js
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
