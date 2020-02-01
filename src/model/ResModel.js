/*
 * Author: your name
 * Date: 2020-02-01 14:32:45
 * LastEditTime: 2020-02-01 14:38:20
 * LastEditors: Please set LastEditors
 * Description: res 数据模型
 * FilePath: \koa-weibo\src\model\ResModel.js
 */

/**
 *
 * 基础模块
 * @class BaseModel
 */
class BaseModel {
    constructor({ status, data, message }) {
        this.status = status
        if(data) {
            this.data = data
        }

        if(message) {
            this.message = message
        }
    }
}


/**
 *
 * 成功的数据模型
 * @class SuccessModel
 * @extends {BaseModel}
 */
class SuccessModel extends BaseModel {
    constructor(data = {}) {
        super({
            status: 200,
            data
        })
    }
}

/**
 *
 * 失败的数据模型
 * @class ErrorModel
 * @extends {BaseModel}
 */
class ErrorModel extends BaseModel {
    constructor({ status, message }) {
        super({
            status,
            message
        })
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}
