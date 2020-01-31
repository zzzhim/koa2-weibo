/*
 * Author: your name
 * Date: 2020-02-01 00:43:05
 * LastEditTime: 2020-02-01 00:45:09
 * LastEditors: Please set LastEditors
 * Description: 封装 Sequelize 数据类型
 * FilePath: \koa-weibo\src\db\type.js
 */

const Sequelize = require('sequelize')

module.exports = {
    STRING: Sequelize.STRING,
    DECIMAL: Sequelize.DECIMAL,
    INTEGER: Sequelize.INTEGER,
    TEXT: Sequelize.TEXT,
    ENUM: Sequelize.ENUM,
    BOOLEAN: Sequelize.BOOLEAN,
}