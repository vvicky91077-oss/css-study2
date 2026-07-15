

/**
 *  new Array() 是从哪里来的？
 * 数组有那些方法 有哪些属性 这些方法和属性是哪里来的
 * 
 * 
 * 
 */



// new 一个数组实例
let arr = new Array()
console.log('打印看看这个arr',arr)
console.log('打印看看这个arr',Array,Array.prototype)
console.log(Object.getOwnPropertyNames(Array.prototype))

// 也可以这样声明一个数组
let arr2 = ['治安湖','头顿','榴莲']
console.log('打印看看这个arr2：',arr2)

var arr3 = ['', , 1,null,,]

console.log('打印看看这个arr3：',arr3)


