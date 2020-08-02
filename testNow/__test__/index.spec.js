const fs= require('fs')
test('集成测试，测试生成测试代码文件', ()=>{
  // 准备环境
  // 将上一次生成的test文件夹删除
  // recursive:true 如果文件里 有文件就一起删掉 
  fs.rmdirSync(__dirname+'/data/__test__',{    
    recursive:true
  })

  const src= (require('../index'))()
  //逻辑代码在那个位置，
  src.getJestSource(__dirname+'/data')
})






// test('测试代码生成',()=>{
//   const src = new(require('../index'))()
//   const ret = src.getTestSource('fun','class')
//   expect(ret)
//   .toBe(`
//   test('TEST fun',()=>{
//     const fun = require('../class')
//     const ret = fun()
//     // expect(ret)
//     // .toBe('test return')
//   })
//   `)
// })







test('生成测试工具', ()=>{
  // 获取到执行的文件 ,因为是一个class，需要new 
  const src= new(require('../index'))()
  // 文件方法执行
  const ret = src.getTestFileName('/abc/class.js')
  // console.log('getTestFileNmae', ret);

  //预期
  expect(ret)
    .toBe('/abc/__test__/class.spec.js')
})