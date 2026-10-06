// ===== ES Module 导出方式 2：默认导出 export default（每个模块只能有一个）=====
export default class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello, I'm ${this.name}`;
  }
}

// 默认导出和命名导出可以共存
export const ROLE = 'admin';
