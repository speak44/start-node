const fs = require('fs')
// 读取图片
const rs = fs.createReadStream('./01.png')
// 写入 图片 现在还不存在02.png；
const ws = fs.createWriteStream('./02.png')
//链接，把两个连接在一起，赋值操作
rs.pipe(ws)