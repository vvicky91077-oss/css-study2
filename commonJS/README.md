# CommonJS 与 ES Module 学习指南

本目录用最小示例对比 Node.js 中的两套模块系统：

- **CommonJS（CJS）**：`require` / `exports` / `module.exports`，Node 的传统模块系统
- **ES Module（ESM）**：`import` / `export` / `export default`，JavaScript 官方标准

> 文件后缀决定模块类型：`.cjs` 一定按 CommonJS 解析，`.mjs` 一定按 ES Module 解析，所以不需要在 package.json 里配置 `"type"`。

---

## 一、怎么运行

在本目录下打开终端：

```bash
npm run cjs       # 运行 CommonJS 示例
npm run esm       # 运行 ES Module 示例
npm run esm-cjs   # ESM 里引入 CJS
npm run cjs-esm   # CJS 里引入 ESM
npm run all       # 依次运行全部
```

也可以直接用 node 运行单个文件，例如 `node cjs/main.cjs`。

建议**一边看代码一边运行**，把输出和代码对照起来看。

---

## 二、推荐阅读顺序

### 第 1 步：CommonJS（`cjs/` 目录）

先看**导出方**，再看**引入方**：

| 顺序 | 文件 | 看什么 |
|---|---|---|
| 1 | [cjs/math.cjs](cjs/math.cjs) | `exports.add = ...`：往导出对象上逐个挂载属性 |
| 2 | [cjs/user.cjs](cjs/user.cjs) | `module.exports = {...}`：一次性替换整个导出对象；注释里有 `exports = {...}` 的**错误写法** |
| 3 | [cjs/counter.cjs](cjs/counter.cjs) | 导出一个变量 `count` 和一个修改它的函数 |
| 4 | [cjs/main.cjs](cjs/main.cjs) | 用 `require` 引入以上模块 |

运行 `npm run cjs`，输出如下：

```
--- CommonJS require ---
add(1, 2) = 3
sub(5, 3) = 2
Hello, I'm Tom v1.0.0
counter.count = 0 | getCount() = 1     ← 重点①
动态 require: main.cjs                  ← 重点②
缓存同一对象: true                       ← 重点③
```

- **重点①**：`increment()` 之后 `counter.count` 仍然是 `0`。原因是 `module.exports = { count }` 导出时把当时的值**拷贝**了一份，之后模块内部的 `count` 再怎么变，外部拿到的都是旧值。要读到最新值，只能通过函数 `getCount()` 去取。
- **重点②**：`require` 是普通函数调用，可以写在 `if`、函数内部等**任何位置**。
- **重点③**：同一个模块第一次被 `require` 后会被缓存，再次 `require` 拿到的是**同一个对象**，模块代码只执行一次。

### 第 2 步：ES Module（`esm/` 目录）

| 顺序 | 文件 | 看什么 |
|---|---|---|
| 1 | [esm/math.mjs](esm/math.mjs) | 命名导出：`export const`、`export function`、`export { mul as multiply }` |
| 2 | [esm/user.mjs](esm/user.mjs) | 默认导出 `export default`，可以和命名导出共存 |
| 3 | [esm/counter.mjs](esm/counter.mjs) | 与 `cjs/counter.cjs` 对照着看 |
| 4 | [esm/index.mjs](esm/index.mjs) | 聚合导出：把多个模块的导出集中到一个入口文件 |
| 5 | [esm/main.mjs](esm/main.mjs) | `import` 的各种写法 |

`main.mjs` 中的 import 写法速查：

```js
import { add, PI } from './math.mjs';      // 命名引入，花括号里的名字必须和导出名一致
import { add as plus } from './math.mjs';  // 引入时重命名
import * as MathAll from './math.mjs';     // 把所有命名导出收进一个对象
import User, { ROLE } from './user.mjs';   // 默认导出（不加花括号，名字随意）+ 命名导出
const mod = await import('./user.mjs');    // 动态引入，返回 Promise
```

运行 `npm run esm`，重点看这一行：

```
count = 1     ← 与 CJS 的 0 形成对比
```

ESM 导出的是**活绑定（live binding）**：外部拿到的 `count` 直接指向模块内部的那个变量，模块里改了，外部立刻就能看到。但外部**不能**写 `count = 2`，会报错，因为导入的绑定是只读的。

### 第 3 步：互相引入（`interop/` 目录）

| 文件 | 场景 | 写法 |
|---|---|---|
| [interop/esm-import-cjs.mjs](interop/esm-import-cjs.mjs) | ESM 引入 CJS | `import x from './a.cjs'`（`module.exports` 整体变成 default）；在 ESM 里想用 `require`，可以借助 `createRequire` |
| [interop/cjs-import-esm.cjs](interop/cjs-import-esm.cjs) | CJS 引入 ESM | 用 `await import()` 动态加载 |

> 补充：较新版本的 Node（v22.12+ / v23+）已经支持直接 `require()` 一个同步的 ESM 模块，但为了兼容性，用 `import()` 仍然是最稳妥的做法。

---

## 三、核心对比表

| 对比项 | CommonJS | ES Module |
|---|---|---|
| 导出语法 | `exports.x = ...`<br>`module.exports = ...` | `export ...`<br>`export default ...` |
| 引入语法 | `const x = require('...')` | `import x from '...'` |
| 加载时机 | 运行时同步加载 | 编译时静态分析（`import()` 除外） |
| 能否写在 if / 函数里 | ✅ 可以 | ❌ 静态 `import` 只能写在顶层；动态加载用 `import()` |
| 导出的值 | 值的拷贝（基本类型） | 活绑定，只读 |
| 顶层 `this` | `module.exports` | `undefined` |
| `__filename` / `__dirname` | ✅ 有 | ❌ 没有，用 `import.meta.url` 代替 |
| 顶层 `await` | ❌ 不支持 | ✅ 支持 |
| 文件后缀 | `.cjs`，或 `"type"` 不是 `module` 时的 `.js` | `.mjs`，或 `"type": "module"` 时的 `.js` |

---

## 四、最容易踩的坑：`exports` vs `module.exports`

可以理解为 Node 在每个 CJS 模块外面包了这样一层：

```js
function (exports, require, module, __filename, __dirname) {
  // exports 一开始就等于 module.exports
  // ...你的代码...
  return module.exports;   // 真正导出的永远是 module.exports
}
```

所以：

```js
exports.a = 1;            // ✅ 修改的是同一个对象，有效
module.exports = { a: 1 } // ✅ 直接替换返回值，有效
exports = { a: 1 }        // ❌ 只是让局部变量 exports 指向了新对象，module.exports 没变，导出为空
```

**记法**：要导出单个类或函数，或者一次性导出一个对象，用 `module.exports =`；只想往导出对象上加属性，用 `exports.xxx =`。两种写法不要混用。

---

## 五、动手练习

1. 在 [cjs/user.cjs](cjs/user.cjs) 里把 `module.exports = ...` 改成 `exports = { User, VERSION }`，运行 `npm run cjs`，观察报错。
2. 在 [esm/main.mjs](esm/main.mjs) 末尾加一行 `count = 100`，运行后观察报错 `Assignment to constant variable`。
3. 在 [esm/main.mjs](esm/main.mjs) 的 `if` 语句里写一个静态 `import`，看语法报错，再改成 `import()`。
4. 在 [cjs/math.cjs](cjs/math.cjs) 顶部加 `console.log('math loaded')`，然后在 main.cjs 里 `require` 它两次，确认只打印了一次，也就是模块被缓存了。
