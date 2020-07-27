const http=require('http')
const fs= require('fs')
const server= http.createServer((request,response)=>{
  // console.log('response是什么？',getPrototype(response))
  // response.end('11111')
  const {url, method,headers} = request
  if(url==='/' && method==='GET'){
    // 异步执行 不浪费cpu资源
    fs.readFile('index.html',(err,data)=>{
        if(err){
          response.writeHead(500,{
            'Content-Type': 'text/plain;charset=utf-8'
          })
          response.end('500, 服务器错误')
          return
        }else{
          // 分开写。相当于上面完整写的writeHead
          response.statusCode=200
          response.setHeader('Content-Type', 'text/html')
          response.end(data)
        }
    })
  }else if(url==='/user'&& method==='GET'){
    response.writeHead(200,{
      'Content-Type':'application/json'
    })
    response.end(JSON.stringify({name:'ohaha'}))

  }else if(method==='GET' && headers.accept.indexOf('image/*')!==-1){
    console.log('sdsdsds')
    // Accept: image/webp,image/apng,image/*,*/*;q=0.8
    fs.createReadStream('.'+url).pipe(response)
  }
  else{
    response.statusCode=404
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end('404页面')
  }
})
server.listen(4000)


function getPrototype(obj){
  const protoChain=[]
  while(obj = Object.getPrototypeOf(obj)){
      protoChain.push(obj)
  }
  return protoChain
}