// ===== ES Module 引入：import =====
import { add, mul, multiply, PI } from './math.mjs'; // 命名引入
import { add as plus } from './math.mjs';            // 重命名引入
import * as MathAll from './math.mjs';               // 命名空间引入
import User, { ROLE } from './user.mjs';             // 默认 + 命名
import { count, increment } from './counter.mjs';
import * as Lib from './index.mjs';                  // 从聚合入口引入

console.log('--- ES Module import ---');
console.log('add(1, 2) =', add(1, 2), '| plus(1, 2) =', plus(1, 2));
console.log('mul(2, 3) =', mul(2, 3), '| multiply(2, 3) =', multiply(2, 3), '| PI =', PI);
console.log('MathAll keys:', Object.keys(MathAll));
console.log(new User('Jerry').hello(), '| role =', ROLE);

// 活绑定演示：increment 后 count 同步变化（但不能在外部直接赋值 count = 1）
increment();
console.log('count =', count); // 1

console.log('Lib keys:', Object.keys(Lib));

// 动态引入：import() 返回 Promise，可按需加载
const { default: U } = await import('./user.mjs');
console.log('动态 import():', new U('Lazy').hello());

// count = 100; // ❌ 错误示范：ESM 的命名导出是只读的，不能直接赋值
