a=10
// console.log('this.a',this.a)
// console.log('global.a',global.a)
// console.log(module.exports)

// const buffer=Buffer.from('Hello Node')
// const buffer= new Buffer('Hello Node')
// console.log('buffer',buffer)

// console.log(buffer.toString('utf-8',0,5));
// console.log(buffer.toString('utf-8'));

// 废除的方法，一个汉字三个字节，如果最大缓冲区最多只能容纳10个字节，那么每三个字之后就会有一个字被拦截。+= 就会调用toString()
const rs = require('fs').createReadStream('text.txt', {highWaterMark: 10})

// var data = ''
// rs.on("data", (chunk)=>{
//   data+=chunk
// })
// rs.on("end", ()=>{
//   console.log(data)
// })

var data=[]

rs.on('data',(chunk)=>{
  data.push(chunk)
})
rs.on('end',()=>{
  console.log('data',data)
  const buf= Buffer.concat(data); // 把数组转化成字符串
  console.log('buf',buf)
  console.log(buf.toString())
})


