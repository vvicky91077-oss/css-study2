// ===== ES Module 导出方式 1：命名导出 export =====
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}
// 先定义再统一导出，可用 as 重命名
export { mul, mul as multiply };
