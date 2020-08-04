const Koa = require('koa')
const session = require('koa-session')
const app = new Koa()

// key的作用是对cookie进行签名
// 如果有加密算法的话，会以keys作为加密算法。
app.keys=['some secret']
const SESS_CONFIG = {
  key:'ohh:hhhh',
  maxMge:86400000,
  httpOnly: true,
  signed: true // 设置签名
}



app.use(session(SESS_CONFIG,app))
app.use(ctx=>{
  if(ctx.path==='/favicon.ico')return 

  // 获取session 对应用户 对应的的session
  let n = ctx.session.count|| 0
  ctx.session.count =++n
  // 打印第几次浏览
  ctx.body= `第${n}次`
})
app.listen(3030)
