/*
 * Author: your name
 * Date: 2020-02-15 00:04:14
 * LastEditTime: 2020-02-15 00:25:34
 * LastEditors: Please set LastEditors
 * Description: 时间相关的工具函数
 * FilePath: \koa-weibo\src\utils\dt.js
 */

const { format } = require('date-fns')

class DateFormat {

    /**
     *
     * 格式化时间，如 2020.11.11 11:11
     * @param {*} str
     * @returns
     * @memberof DateFormat
     */
    _timeFormat(str) {
        if(str == null) {
            return str
        }
        return format(new Date(str), 'yyyy.MM.dd HH:mm')
    }
}

module.exports = new DateFormat()
