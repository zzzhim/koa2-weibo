/*
 * Author: your name
 * Date: 2020-02-04 20:59:41
 * LastEditTime: 2020-02-07 22:52:11
 * LastEditors: Please set LastEditors
 * Description: utils API 路由
 * FilePath: \koa-weibo\src\routes\api\utils.js
 */

const Router = require('koa-router')
const koaForm = require("formidable-upload-koa")

const { loginCheck } = require('../../middlewares/lofinChecks')
const { saveFile } = require("../../controller/utils")

const router = new Router()

router.prefix('/api/utils')

router.post('/upload', loginCheck, koaForm(), async (ctx, next) => {
    const file = ctx.req.files['file']
    const { size, path, name, type } = file

    ctx.body = await saveFile({
        size,
        filePath: path,
        name,
        type
    })
})

module.exports = router
