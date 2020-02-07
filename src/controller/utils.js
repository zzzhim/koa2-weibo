/*
 * Author: your name
 * Date: 2020-02-04 21:06:34
 * LastEditTime: 2020-02-07 23:07:12
 * LastEditors: Please set LastEditors
 * Description: utils controller
 * FilePath: \koa-weibo\src\controller\utils.js
 */
const path = require('path')
const { ErrorModel, SuccessModel } = require('../model/ResModel')
const { uploadFileSizeFailInfo } = require('../model/ErrorInfo')
const fse = require('fs-extra')

class UtilsController {
    // 存储目录
    DIST_FOLDER_PATH = path.join(__dirname, '..', '..', 'uploadFiles')

    // 文件体积最大为 1m
    MIX_SIZE = 1024 * 1024 * 1024

    constructor() {
        this.saveFile = this.saveFile.bind(this)
        this.example = this.example.bind(this)
    }

    /**
     *
     * 文件上传 controller
     * @param {*} { name, type, size, filePath }
     * @memberof UtilsController
     */
    async saveFile({ name, type, size, filePath }) {

        // 文件体积超过最大体积
        if(size > this.MIX_SIZE) {
            // 删除文件
            this.example(filePath)
            return new ErrorModel(uploadFileSizeFailInfo)
        }

        // 移动文件
        const fileName = Date.now() + '.' + name // 防止重名
        const distFilePath = path.join(this.DIST_FOLDER_PATH, fileName)
        await fse.move(filePath, distFilePath)

        // 返回信息
        return new SuccessModel({
            url: '/' + fileName
        })
    }

    /**
     *
     * 文件删除方法
     * @param {*} src 删除文件的路径
     * @memberof UtilsController
     */
    async example(src) {
        try {
            await fse.remove(src)
        } catch (err) {
            console.error(err)
        }
    }

}

module.exports = new UtilsController()