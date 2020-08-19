const Koa = require('koa')
const session = require('koa-session')
const redisStore = require('koa-redis')
const redis = require('redis')
const redisClient =redis.createClient(6379, 'localhost')

const wrapper =require('co-redis')
const client =wrapper(redisClient)


const app = new Koa()

// key的作用是对cookie进行签名
// 如果有加密算法的话，会以keys作为加密算法。
app.keys=['some secret']
const SESS_CONFIG = {
  key:'ohh:hhhh',
  maxMge:86400000,
  httpOnly: true,
  signed: true, // 设置签名
  store: redisStore({client}) // 定义存储，就会按照定义的内容来进行存储
}



app.use(session(SESS_CONFIG,app))

app.use(async (ctx,next) => {
  const keys =await client.keys('*')
  keys.forEach(async key=>console.log('key:',await client.get(key)))
  await next()
})



app.use(ctx=>{
  if(ctx.path==='/favicon.ico')return 

  // 获取session 对应用户 对应的的session
  let n = ctx.session.count|| 0
  ctx.session.count =++n
  // 打印第几次浏览
  ctx.body= `第${n}次`
})
app.listen(3030)
