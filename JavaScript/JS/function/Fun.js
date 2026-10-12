//1. 定义构造函数
// 构造函数（首字母一般大写）
function Person(name, age) {
  // 实例属性
  this.name = name;
  this.age = age;

  // 实例方法（每个对象都会创建一份，不推荐）
  this.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}