// ===== CommonJS 导出方式 2：module.exports = 整体替换 =====
class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello, I'm ${this.name}`;
  }
}

const VERSION = '1.0.0';

module.exports = { User, VERSION };

// ❌ 错误示范：直接给 exports 赋值会断开与 module.exports 的引用，导出无效
// exports = { User };
