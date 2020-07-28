test('生成测试工具', ()=>{
  // 获取到执行的文件
  const src= require('../index')
  // 文件方法执行
  const ret = src.getTestFileName('/abc/class.js')
  console.log('getTestFileNmae', ret);

  //预期
  expect(ret)
    .toBe()
  
})