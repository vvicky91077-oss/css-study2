// ===== ESM 中引入 CommonJS 模块 =====
// module.exports 整体作为 default 导出
import mathCjs from '../cjs/math.cjs';
// Node 会静态分析 exports.xxx，通常也支持命名引入
import { User } from '../cjs/user.cjs';

// 在 ESM 里也能用 require：借助 createRequire
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const counter = require('../cjs/counter.cjs');

console.log('--- ESM 引入 CJS ---');
console.log('mathCjs.add(2, 3) =', mathCjs.add(2, 3));
console.log(new User('Mix').hello());
console.log('createRequire ->', counter.getCount());
