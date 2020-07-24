
// 读取文件，引入fs
// const fs = require('fs')


// 同步读取
// const data=fs.readFileSync('./conf.js')

// console.log('data', data) // data <Buffer 31 32 33>
// console.log('data', data.toString())  // data 123

// // 异步读取
// fs.readFile('./conf.js',(err,data)=>{
//   // 错误优先处理原则
//   if(err){
//     throw err
//   }
//   console.log('data', data.toString())
// })

(async()=>{
  const fs= require('fs')
  const {promisify} =require('util')
  const readFile = promisify(fs.readFile)
  const data = await readFile('./conf.js')
  console.log('1111data',data.toString())
})()

