/*
 * Author: your name
 * Date: 2020-01-28 20:07:35
 * LastEditTime: 2020-02-04 18:06:08
 * LastEditors: Please set LastEditors
 * Description: 环境变量
 * FilePath: \koa-weibo\src\utils\env.js
 */

const ENV = process.env.NODE_ENV

module.exports = {
    isDev: ENV === 'dev',
    notDev: ENV !== 'dev',
    isProd: ENV === 'produciton',
    notProd: ENV !== 'produciton',
    isTest: ENV === 'test',
    notTest: ENV !== 'test'
}