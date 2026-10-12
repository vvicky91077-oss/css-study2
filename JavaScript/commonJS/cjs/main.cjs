// ===== CommonJS 引入：require =====
const math = require('./math.cjs');            // 整体引入
const a = require('./math.cjs');            // 整体引入
const { User, VERSION } = require('./user.cjs'); // 解构引入
const counter = require('./counter.cjs');

console.log('--- CommonJS require ---');
console.log('add(1, 2) =', math.add(1, 2));
console.log('sub(5, 3) =', math.sub(5, 3));
console.log(new User('Tom').hello(), 'v' + VERSION);

// 值拷贝演示：increment 后 counter.count 不变
counter.increment();
console.log('counter.count =', counter.count, '| getCount() =', counter.getCount()); // 0 | 1

// require 是同步的，可以写在任意位置（条件、函数内部）
if (true) {
  const path = require('path');
  console.log('动态 require:', path.basename(__filename));
}

// 模块缓存：多次 require 拿到的是同一个对象
console.log('缓存同一对象:', require('./math.cjs') === math); // true
