# 1 浏览器相关的叫 BOM  (Browser Object Model)：即浏览器对象模型。它提供了独立于内容而与浏览器窗口进行交互的对象和 API（如获取屏幕分辨率、页面跳转、弹窗控制等）




浏览器的属性






# 2 Html页面相关的DOM Document Object Model 文档对象模型。它将网页结构解析为一个树状对象，提供操作 HTML 和 CSS 的 API（如增删改查元素、修改样式等）

什么是节点  父节点 子节点  兄弟节点 

插入节点 删除节点 读取节点



# 3 基本数据类型
boolean    undefined  null  number string 

function array object

# 4 语句
if  else   switch 语句

作业：  实现一个to do list 功能，可以去B站找视频 跟着做 能做出来就算成功



# 递归 地狱回调

# 

# 5 闭包
闭包就是一个函数能够访问并保存它外部作用域中的变量，即使外部函数已经执行结束，这些变量依然可以被访问。
闭包最常见的用途 ① 保存变量 ② 模拟私有变量
缺点： 闭包会让变量持续存在，不能及时被垃圾回收。如果大量使用闭包，可能造成内存占用增加，严重时可能造成内存泄漏。

# 异步

# 5 底层原理
# 6 什么是原型 什么是原型链 读下面的文章
https://juejin.cn/post/6844903989088092174
# 7 什么是跨域
# 8 什么是深拷贝 什么是浅拷贝
https://juejin.cn/post/6844904197595332622?searchId=20260725104018360F89927FE57D3C20D7

# 9 什么是作用域

# 10 什么叫同源

# 11 ajax   axios ,get post 请求的区别 ，http  和https的区别   什么是三次挥手 什么是四次握手
https://juejin.cn/post/6844903479878615053?searchId=2026072510405761F138C34E3579273E87
https://juejin.cn/post/6844903618764603399?searchId=2026072510405761F138C34E3579273E87

 axios:    
 https://juejin.cn/post/7124573626161954823?searchId=20260725104225D7C22726595165341159
 https://juejin.cn/post/7053471988752318472?searchId=2026072510433090A477DA0D2F2B3F0A3E
 https://juejin.cn/post/7053471988752318472?searchId=2026072510433090A477DA0D2F2B3F0A3E
 # axios 
 Axios 的底层原理核心在于环境适配器、Promise 异步管理以及拦截器链式调用。它根据运行环境自动切换请求方式，对外提供统一的 Promise 接口，并在发送前后通过队列处理数据。核心工作机制环境适配器：在浏览器中自动使用原生的 XMLHttpRequest 对象发送请求。在 Node.js 环境中自动切换使用原生的 http 或 https 模块。Promise 封装：所有请求最终都返回一个 Promise 对象，方便使用 .then() 和 .catch() 或 async/await 处理异步结果。拦截器（Interceptors）：采用类似链表或数组队列的 chain 机制。请求拦截器按照“后进先出”的顺序执行，响应拦截器按照“先进先出”的顺序执行，在请求发出前和响应到达后对数据进行加工。转换与取消：自动对请求数据和响应数据进行 JSON 转换。通过 CancelToken（或现代的 AbortController）实现请求的中断机制。

# this 指向
普通函数：看“谁调用”
箭头函数：看“外层是谁”

普通函数直接调用 → 非严格模式 this 通常是 window；严格模式是 undefined。
箭头函数没有自己的 this ，只能去 其自身层找 ，找到的等同于继承。
普通函数嵌套 另一个普通函数，最里面的this 不会自动继承外面的this，也不可以往外找，要么传 this 进来，要么改成箭头⬆️函数


改变this指向
call：指定 this 指向为第一个传参 ，然后立刻执行， call：散装参数
apply：数组参数，其他跟call一样。
bind: 先绑定，之后再执行。
🟥 call：改 this，马上干
🟨 apply：改 this，马上干，但是参数装数组
🟩 bind：改 this，先不干，返回一个新函数


new 做的事情之一，就是创建一个新对象，然后让构造函数里面的 this 指向这个新对象。 还会把新对象和构造函数的 prototype 建立关系。

箭头函数不能当作构造函数 和 new 一起执行,如果和 new 一起执行会抛出 TypeError 错误
原因分析
*没有 [[Construct]] 方法：箭头函数在设计时就没有内部的构造方法，因此它不具备创建实例的能力。
*没有自己的 this：箭头函数的 this 指向定义时所在外层作用域的 this，无法在执行 new 时动态绑定新创建的对象实例。
*没有 prototype 属性：箭头函数没有原型对象，无法通过原型链继承属性和方法。

https://juejin.cn/post/6946021671656488991?searchId=20260725104712DE671DB9DBBFE93B07AD


# 前端设计模式 ：工厂模式 单例模式 
https://juejin.cn/post/7205875448575033400
# es6 ES6 Promise
https://juejin.cn/post/7320288262400311333?searchId=202607251048002F60689B4DDD401AD942

https://www.arryblog.com/vip/es6/ 全部
# for .... of ....
for...of 的底层核心是迭代器协议与可迭代协议。当循环启动时，它会调用对象的 Symbol.iterator 方法获取一个迭代器，然后重复调用该迭代器的 next() 方法，直到返回对象的 done 属性变为 true 为止。
https://juejin.cn/post/7239715295485362237
https://www.arryblog.com/vip/es6/iterator-mode.html 这篇文章




# 1. 父组件传 子组件 ,子组件传父组件, ref 
父传子 --> 父组件向 子组件传值，主要使用 props。父组件通过 属性 把数据传给子组件，子组件通过 props 接收。
子传父 --> 子组件传给父组件，一般使用 $emit 触发自定义事件 并传递数据。父组件通过 @事件名="方法" 监听这个事件，再通过方法的参数接收子组件传过来的数据。
ref --> ref 是给 DOM 元素或子组件添加引用标识，$refs 是通过这个标识获取对应的 DOM 元素或子组件实例。Vue 2 中一般通过 this.$refs.xxx 来访问。



# 2. 如果父组件 传值 到子组件 ,  子组件 是否可以修改这个值?
不能直接修改。因为 Vue 的 props 是单向数据流，数据只能从父组件流向子组件。子组件接收到 props 后，不能直接修改它。
1.数据流向混乱 (Data Flow Tracking)
如果子组件可以直接修改父组件传过来的数据，那么多个组件都可能修改同一个数据，出现数据来源不清楚的问题，发生 bug 时也很难定位是哪个子组件修改的。
2.修改可能被覆盖 (State Overwriting)
父组件的数据发生变化或者重新渲染时，会重新把最新的 props 传给子组件。
如果子组件之前直接修改了 props，这个修改可能会被父组件传下来的值覆盖。导致 bug。
3.不利于代码维护和复用 (Maintainability)
Vue 提倡 “谁拥有数据，谁负责修改数据”。（Data owns change）
父组件的数据应该由父组件管理和修改，子组件如果需要修改，应该通过 $emit 通知父组件，由父组件来修改。

正常父传子流程 --> 父组件 data → props → 子组件
要求父改--->子组件 → $emit → 父组件 → 修改 data → props → 子组件




# 3. $set 和 this.$set的区别 ,   $set的作用是什么?
$set 的作用：让 Vue 2 新增的对象属性或修改的数组下标具有响应式。
this.$set 是 Vue 2 提供的方法，用来给对象添加新的响应式属性，或者修改数组指定下标的数据。
因为 Vue 2 的响应式机制是通过 Object.defineProperty 实现的，所以对于一开始没有定义的对象属性，直接使用 . 添加，Vue 可能无法检测到数据变化。
使用 $set 可以解决这个问题，让新增的属性具有响应式 并触发视图刷新🔄。

Vue 2 对新增对象属性和数组下标的变化检测存在一些限制，所以需要 $set；Vue 3 使用 Proxy 后，这些问题得到了改善。


# 4. vue  的响应式原理是什么
Vue 的响应式原理主要是通过数据劫持/代理 + 依赖收集 + 发布通知来实现的。当数据发生变化时，Vue 能够检测到数据变化，并通知相关组件重新渲染。

数据劫持 + 依赖收集 + 发布通知 === 数据变化 → 检测到变化 → 通知 → 视图更新




# 5. vue2的响应式原理是什么? 发布订阅是什么?
Vue 2 的响应式原理主要是通过 Object.defineProperty 对 data 中的数据进行劫持，在数据读取的时候进行依赖收集，在数据发生变化的时候通知相关的 Watcher，Watcher 再触发视图更新。这个过程中使用了发布订阅的思想。
data →Object.defineProperty →数据劫持 → 依赖收集 →Watcher →数据发生变化 →通知 Watcher →更新视图

发布-订阅就是一个对象发生变化的时候，通知所有订阅了这个变化的对象。





# 6. new一个实例的时候 ,const subject = new Subject(); 这个new干了什么?
new 首先创建一个新的空对象，然后把这个对象的原型指向构造函数的 prototype，再把构造函数内部的this指向这个新对象并执行构造函数，最后返回这个新对象。
new = 创建对象 → 连接原型 → 绑定 this → 返回对象

如果 Subject 是自写的发布订阅类，那么 new Subject() 就是在创建一个独立的 Subject 实例，这个实例会拥有自己的订阅列表等数据。




# 7. Object.key
Object.keys() 获取对象所有的 key，Object.values() 获取对象所有的 value，Object.entries() 获取对象所有的 key 和 value。

const user = {
  name: '张三',
  age: 25,
  gender: '男'
};

const keys = Object.keys(user);
console.log(keys); 
// 输出: ['name', 'age', 'gender']






# 8. Object.defineProperty() 是 JavaScript 的一个内置方法，可以定义或修改对象的属性，并且可以通过 get 和 set 控制属性的读取和修改。Vue 2 就利用它来实现数据劫持和响应式。

const user = {};
user.name = '张三';

Object.defineProperty(user, 'name', {
  value: '张三'
});

console.log(user.name);// 张三






# 9. Vue生命周期
               创建
                  ↓
            beforeCreate
                  ↓
               created
                  ↓
                  挂载
                  ↓
               beforeMount
                  ↓
               mounted
                  ↓
               【组件运行】
                  ↓
               数据发生变化
                  ↓
               beforeUpdate
                  ↓
               updated
                  ↓
               【继续运行】
                  ↓
               组件销毁
                  ↓
            beforeDestroy
                  ↓
               destroyed ( 表示 Vue 实例已经完成销毁)
       
Vue 2 的生命周期主要分为创建、挂载、更新和销毁四个阶段。创建阶段有 beforeCreate 和 created，挂载阶段有 beforeMount 和 mounted，更新阶段有 beforeUpdate 和 updated，销毁阶段有 beforeDestroy 和 destroyed。

比较常用的是 created 和 mounted。created 时数据和方法已经可以使用，但是 DOM 还没有挂载，所以比较适合发送请求；mounted 时 DOM 已经挂载完成，如果需要操作真实 DOM，可以放在这里。

Vue 提供了一系列的生命周期钩子函数（Hooks），允许我们在特定的阶段执行自定义的 JavaScript 代码。Vue 2 的生命周期钩子总共可以分为 4 个大阶段（8 个核心钩子） 以及 3 个特殊钩子。

把 Object.defineProperty 联系起来，Vue 2 的核心初始化流程是这样的：
   1. new Vue() 启动。
   2. 触发 beforeCreate。
   3. Vue 内部遍历 data，使用 Object.defineProperty 将所有属性转换为响应式的属性（Getter/Setter）。
   4. 触发 created（此时数据已经可以被监测到了）。
   5. 编译模板，触发 beforeMount。
   6. 开启观察者模式：每个组件实例对应一个渲染 Watcher（观察者），它会收集依赖，并把虚拟 DOM 渲染成真实 DOM。
   7. 触发 mounted。

------------------------------
其他 3 个特殊钩子
除了上述 8 个常用钩子，Vue 2 还有 3 个特定场景下的钩子：

* activated：被 <keep-alive> 缓存的组件激活时调用。
* deactivated：被 <keep-alive> 缓存的组件停用（离开）时调用。
* errorCaptured：当捕获一个来自子孙组件的错误时被调用（用于错误上报和监控）。

------------------------------
常见面试/实战高频问题

* 在哪个钩子发请求最好？
通常在 created 中。因为越早发请求，数据返回越快，能减少页面白屏时间。如果业务需要依赖真实 DOM，才放进 mounted。
* 父子组件的生命周期执行顺序？
* 挂载时：父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted。（子组件先挂载完毕，父组件才算挂载完毕）
   * 更新时：父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated。
   * 销毁时：父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed。