const path = require('path')
module.exports = class TestNow{

// 自动生成测试代码
getTestSource(methodName,classFile,isClass){
// methodName 方法名
// classFile 路径
// isClass class 或者是fun，来判断导出时是否需要解构

// 直接return 生成一个test文件中的，spec.js 中的test（'名字', 函数）
// 可以根据刚刚写的，test 生成测试工具来编写下面的测试模板
  return `
  test('TEST ${methodName}',()=>{
    const ${isClass? '{'+ methodName +'}':methodName} = require('../${classFile}')
    const ret = ${methodName}()
    // expect(ret)
    // .toBe('test return')
  })`
}


/**
 * 生成测试文件名
 * @param {*} filename  代码文件名
 */
  getTestFileName(filename){
    // 输出方法名
    const dirName= path.dirname(filename)   // /abc  路径
    const baseName= path.basename(filename) // class.js 文件名称
    const extName = path.extname(filename) // .js  文件名称后缀
    // 需要转化出 class.spec.js
    const testName = baseName.replace(extName, `.spec${extName}`)
   // 要进行拼接出来 .toBe('/abc/_test_/class.spec.js')
   // 组装方法
    return path.format({
      root:dirName+'/__test__/',
      base:testName
    })
  }
}