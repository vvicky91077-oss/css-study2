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

# 异步

# 5 底层原理
# 6 什么是原型 什么是原型链 读下面的文章
https://juejin.cn/post/6844903989088092174
# 7 什么是跨域
# 8 什么是深拷贝 什么是浅拷贝
https://juejin.cn/post/6844904197595332622?searchId=20260725104018360F89927FE57D3C20D7

# 什么是作用域

# 什么叫同源

# ajax   axios ,get post 请求的区别 ，http  和https的区别   什么是三次挥手 什么是四次握手
https://juejin.cn/post/6844903479878615053?searchId=2026072510405761F138C34E3579273E87
https://juejin.cn/post/6844903618764603399?searchId=2026072510405761F138C34E3579273E87

 axios:    
 https://juejin.cn/post/7124573626161954823?searchId=20260725104225D7C22726595165341159
 https://juejin.cn/post/7053471988752318472?searchId=2026072510433090A477DA0D2F2B3F0A3E
 https://juejin.cn/post/7053471988752318472?searchId=2026072510433090A477DA0D2F2B3F0A3E
 # axios 
 Axios 的底层原理核心在于环境适配器、Promise 异步管理以及拦截器链式调用。它根据运行环境自动切换请求方式，对外提供统一的 Promise 接口，并在发送前后通过队列处理数据。核心工作机制环境适配器：在浏览器中自动使用原生的 XMLHttpRequest 对象发送请求。在 Node.js 环境中自动切换使用原生的 http 或 https 模块。Promise 封装：所有请求最终都返回一个 Promise 对象，方便使用 .then() 和 .catch() 或 async/await 处理异步结果。拦截器（Interceptors）：采用类似链表或数组队列的 chain 机制。请求拦截器按照“后进先出”的顺序执行，响应拦截器按照“先进先出”的顺序执行，在请求发出前和响应到达后对数据进行加工。转换与取消：自动对请求数据和响应数据进行 JSON 转换。通过 CancelToken（或现代的 AbortController）实现请求的中断机制。

# this 指向

https://juejin.cn/post/6946021671656488991?searchId=20260725104712DE671DB9DBBFE93B07AD


# 前端设计模式 ：工厂模式 单例模式 
https://juejin.cn/post/7205875448575033400
# es6 ES6 Promise
https://juejin.cn/post/7320288262400311333?searchId=202607251048002F60689B4DDD401AD942
