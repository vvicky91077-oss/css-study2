/**
 * 变量提升（Hoisting）面试题
 * 运行：node 面试题/变量提升.js
 *
 * 核心原理：
 * JS 代码执行前会先经过“编译/预解析”阶段，创建执行上下文时：
 *   1. var 声明的变量：声明提升到作用域顶部，初始化为 undefined（赋值留在原地）
 *   2. function 声明：整个函数体一起提升（优先级高于 var）
 *   3. let / const / class：也会提升，但不会初始化，
 *      在声明语句之前访问会落入“暂时性死区（TDZ）”，抛出 ReferenceError
 *   4. 函数表达式（var fn = function(){}）只提升变量名 fn，值是 undefined
 */

// ------------------------------------------------------------
// 题 1：var 的提升
// ------------------------------------------------------------
(function () {
  console.log('题1:', a) // ?
  var a = 1
})()
/**
 * 答案：undefined
 * 解释：等价于
 *   var a
 *   console.log(a) // undefined
 *   a = 1
 * 只有声明被提升，赋值不提升。
 */

// ------------------------------------------------------------
// 题 2：let 的暂时性死区
// ------------------------------------------------------------
(function () {
  try {
    //let b
    console.log('题2:', b) // ?
    let b = 2
  } catch (e) {
    console.log('题2:', e.name, '-', e.message)
  }
})()
/**
 * 答案：ReferenceError: Cannot access 'b' before initialization
 * 解释：let/const 也被提升了（否则会报 "b is not defined"），
 * 但从块级作用域开始到声明语句之间处于 TDZ，访问即报错。
 */

// ------------------------------------------------------------
// 题 3：函数声明 vs var 同名
// ------------------------------------------------------------
;(function () {
  console.log('题3-1:', typeof foo) // ?
  var foo = 1
  function foo() {}
  console.log('题3-2:', typeof foo) // ?
})()
/**
 * 答案：'function'、'number'
 * 解释：预解析阶段函数声明优先，同名的 var 声明会被忽略（不会把 foo 覆盖成 undefined）。
 * 所以第一次打印是 function；执行到 foo = 1 时才被赋值为数字。
 * 注意 function foo(){} 这一行在执行阶段什么也不做（已经提升过了）。
 */

// ------------------------------------------------------------
// 题 4：函数表达式不会整体提升
// ------------------------------------------------------------
;(function () {
  try {
    bar() // ?
    var bar = function () {
      console.log('bar')
    }
  } catch (e) {
    console.log('题4:', e.name, '-', e.message)
  }
})()
/**
 * 答案：TypeError: bar is not a function
 * 解释：只有变量 bar 被提升，值为 undefined，调用 undefined() 报 TypeError。
 * 对比：如果是 function bar(){} 声明，就可以正常调用。
 */

// ------------------------------------------------------------
// 题 5：函数作用域内的提升会“遮蔽”外部变量（经典题）
// ------------------------------------------------------------
var x = 1
function f() {
  console.log('题5:', x) // ?
  var x = 2
}
f()
/**
 * 答案：undefined
 * 解释：f 内部的 var x 被提升到 f 的顶部，等价于
 *   function f() { var x; console.log(x); x = 2 }
 * 查找 x 时先在自己作用域找到了（值为 undefined），就不会再去外部找 1。
 */

// ------------------------------------------------------------
// 题 6：参数、函数声明、var 三者同名（高频难题）
// ------------------------------------------------------------
function fn(a) {
  console.log('题6-1:', a) // ?
  var a = 2
  function a() {}
  console.log('题6-2:', a) // ?
}
fn(1)
/**
 * 答案：[Function: a]、2
 * 解释：函数执行上下文创建顺序：
 *   1. 形参赋值：a = 1
 *   2. 函数声明：a = function a(){}  （覆盖形参）
 *   3. var 声明：a 已存在，忽略（不会重置为 undefined）
 * 所以第一次打印函数；执行 a = 2 后打印 2。
 */

// ------------------------------------------------------------
// 题 7：var 没有块级作用域
// ------------------------------------------------------------
;(function () {
  if (false) {
    var y = 1
  }
  console.log('题7:', y) // ?
})()
/**
 * 答案：undefined
 * 解释：var 只认函数作用域，if 块里的 var y 被提升到外层函数顶部。
 * 即使 if 条件为 false 不执行，声明依然存在，只是没有赋值。
 * 若换成 let y，则会报 ReferenceError: y is not defined。
 */

// ------------------------------------------------------------
// 题 8：综合题
// ------------------------------------------------------------
;(function () {
  var num = 10
  function test() {
    console.log('题8-1:', num) // ?
    if (!num) {
      var num = 20
    }
    console.log('题8-2:', num) // ?
  }
  test()
})()
/**
 * 答案：undefined、20
 * 解释：test 内部的 var num 提升到 test 顶部，num 初始为 undefined；
 * !undefined 为 true，进入 if，num = 20。
 */

/**
 * 面试总结（背这几句）：
 * - var：声明提升 + 初始化为 undefined
 * - function 声明：整体提升，优先级最高，同名 var 声明不会覆盖它
 * - let/const/class：提升但不初始化，存在暂时性死区（TDZ）
 * - 函数表达式/箭头函数：按所用的 var/let/const 规则处理，不会整体提升
 * - 提升以“作用域”为单位：var 是函数作用域，let/const 是块级作用域
 */
