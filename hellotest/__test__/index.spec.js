// 标题
test('测试hellotest',()=>{
  const res= require('../index')
  // console.log('测试结果',helloword)

  expect(res).toBe('hello test!'); //  这个相当于，导出的是否与toBe后面的结果相同，=== 就成功
})
