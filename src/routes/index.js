/*
 * Author: your name
 * Date: 2020-01-26 19:05:34
 * LastEditTime: 2020-01-26 21:20:54
 * LastEditors: Please set LastEditors
 * Description: In User Settings Edit
 * FilePath: \koa-weibo\src\routes\index.js
 */
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

/**
 *
 * 动态参数演示
 */
// router.get("/profile/:userName", async(ctx, next) => {
//     const { userName } = ctx.params
    
//     ctx.body = {
//         title: 'zzzhim',
//         userName
//     }
// })

// router.get("/loadMore/:userName/:pageIndex", async(ctx, next) => {
//     const { userName, pageIndex } = ctx.params
    
//     ctx.body = {
//         title: 'zzzhim',
//         userName,
//         pageIndex
//     }
// })

module.exports = router
