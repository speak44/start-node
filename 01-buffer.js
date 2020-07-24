const buf1= Buffer.alloc(10)
console.log(buf1,'buf1')
//<Buffer 00 00 00 00 00 00 00 00 00 00> 每一组00 代表一个字节；一个字节，代表是两个十六进制的数字

const buf2= Buffer.from('a')
console.log('buf2', buf2) //ascii码 

const buf3 =Buffer.from('中文')
console.log('buf3', buf3) // <Buffer e4 b8 ad e6 96 87> 每三组是一个中文字，采用utf-8的存储方式


// 拼接
const buf4= Buffer.concat([buf2,buf3])
console.log('buf4',buf4)
