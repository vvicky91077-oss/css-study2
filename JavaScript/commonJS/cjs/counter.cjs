// ===== CommonJS 导出的是“值的拷贝”（对基本类型而言）=====
let count = 0;
function increment() {
  count++;
}
module.exports = { count, increment, getCount: () => count };
