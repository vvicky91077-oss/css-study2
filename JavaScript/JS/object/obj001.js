/**
 * 什么是对象
 * 对象可遍历吗
 * 对象可以复制吗
 * 
 */
console.log(Object.getOwnPropertyNames(Object.prototype))

// 声明一个对象
var vikc= new Object()

vikc= {
    // key:value 键值对
    name:'vike',
    age:18,
    sex:'female',
    hobby:''
}
console.log('这是我的：',vikc);
// 这是模板字符串    `${}`   这和写法 可以识别
console.log(`这是我的：,${vikc}`);
// 也可以这样直接声明
var family = {
    sisterName:'大姐-二姐',
    //...
}
console.log('这是我的家人：',family);

