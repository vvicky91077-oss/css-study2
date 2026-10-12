// ===== CommonJS 中引入 ES Module =====
// 传统做法：require 不能同步加载 ESM，需要使用动态 import()
(async () => {
  const { add, PI } = await import('../esm/math.mjs');
  const { default: User } = await import('../esm/user.mjs');

  console.log('--- CJS 引入 ESM ---');
  console.log('add(10, 20) =', add(10, 20), '| PI =', PI);
  console.log(new User('Async').hello());
})();
