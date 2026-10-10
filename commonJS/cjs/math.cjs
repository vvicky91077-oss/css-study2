console.log('math.cjs 模块被加载了'); 


// ===== CommonJS 导出方式 1：exports.xxx（逐个挂载属性）=====
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

// 注意：exports 只是 module.exports 的一个引用
// console.log(exports === module.exports); // true
