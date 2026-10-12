# Node.js 学习笔记（前端进阶版）

> 说明：这是一份根据公开课程目录与公开 Node.js 学习资料整理的学习版


## 一、Node.js 基础

### 1. 认识 Node.js

-   Node.js 是 JavaScript 的运行环境。
-   浏览器中的 JavaScript 主要运行在浏览器环境。
-   Node.js 让 JavaScript 可以运行在服务器端以及命令行等环境。
-   Node.js 使用 V8 JavaScript 引擎执行 JavaScript。

### 2. 为什么学习 Node.js

-   前端可以使用 JavaScript 参与后端开发。
-   可以搭建 HTTP 服务器。
-   可以处理文件、路径、网络请求等。
-   可以使用 npm 管理大量第三方包。
-   是学习 Express、Koa、全栈开发的重要基础。

### 3. Node.js 与浏览器 JS 的区别

  项目         浏览器             Node.js
  ------------ ------------------ ------------------
  DOM          有                 没有
  BOM          有                 没有
  document     有                 没有
  window       有                 没有
  文件系统     受浏览器安全限制   可以通过模块访问
  服务端开发   不是主要用途       主要用途之一

------------------------------------------------------------------------

## 二、开发环境

### 1. Node.js 与 npm

安装 Node.js 后通常可以使用：

``` bash
node -v
npm -v
```

运行 JS：

``` bash
node test.js
```

### 2. package.json

项目通常使用 package.json 描述项目：

``` json
{
  "name": "demo",
  "version": "1.0.0",
  "scripts": {},
  "dependencies": {}
}
```

初始化：

``` bash
npm init -y
```

------------------------------------------------------------------------

## 三、模块与 CommonJS

### 1. 为什么需要模块化

一个项目如果所有代码都写在一个 JS 文件里，会越来越难维护。

模块化可以：

-   拆分代码
-   复用代码
-   降低文件之间的耦合
-   方便团队协作

### 2. CommonJS

导出：

``` js
module.exports = {
  name: "kerwin"
}
```

导入：

``` js
const obj = require("./test.js")
```

### 3. module.exports 与 exports

常见写法：

``` js
exports.name = "kerwin"
```

等价于给：

``` js
module.exports
```

添加属性。

但如果直接重新赋值，应该使用：

``` js
module.exports = {}
```

------------------------------------------------------------------------

## 四、npm

### 1. 安装包

本地安装：

``` bash
npm install axios
```

开发依赖：

``` bash
npm install webpack --save-dev
```

卸载：

``` bash
npm uninstall axios
```

### 2. package-lock.json

记录依赖包的具体版本等信息，帮助不同环境安装比较一致的依赖。

### 3. scripts

例如：

``` json
{
  "scripts": {
    "start": "node app.js"
  }
}
```

运行：

``` bash
npm start
```

------------------------------------------------------------------------

# 五、Node.js 内置模块

## 1. fs 文件系统

读取文件：

``` js
const fs = require("fs")

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(data)
})
```

写入文件：

``` js
fs.writeFile("./data.txt", "hello", err => {
  console.log(err)
})
```

------------------------------------------------------------------------

## 2. path

处理文件路径：

``` js
const path = require("path")

console.log(path.join(__dirname, "public", "index.html"))
```

常见：

``` js
path.join()
path.resolve()
path.basename()
path.extname()
path.dirname()
```

------------------------------------------------------------------------

## 3. url

用于解析 URL。

重点理解：

``` text
协议
 ↓
http://localhost:3000/user?id=1
                   ↑
                 查询参数
```

------------------------------------------------------------------------

## 4. querystring

用于处理查询字符串：

``` js
const querystring = require("querystring")

const obj = querystring.parse("name=tom&age=18")

console.log(obj)
```

得到类似：

``` js
{
  name: "tom",
  age: "18"
}
```

------------------------------------------------------------------------

## 5. events

Node.js 中大量功能都和事件机制有关。

基本形式：

``` js
const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on("hello", () => {
  console.log("hello")
})

emitter.emit("hello")
```

记住：

``` text
on   = 监听事件
emit = 触发事件
```

------------------------------------------------------------------------

# 六、HTTP 服务器

Node.js 可以直接创建 HTTP 服务。

``` js
const http = require("http")

const server = http.createServer((req, res) => {
  res.write("hello node")
  res.end()
})

server.listen(3000, () => {
  console.log("server running")
})
```

访问：

``` text
http://localhost:3000
```

## 请求对象 req

常用：

``` js
req.url
req.method
req.headers
```

## 响应对象 res

常用：

``` js
res.write()
res.end()
res.setHeader()
res.statusCode
```

------------------------------------------------------------------------

# 七、GET 与 POST

## GET

参数通常放在 URL：

``` text
/user?name=tom&age=18
```

## POST

数据通常放在请求 body 中。

Node.js 原生接收 POST 数据时，需要监听：

``` js
req.on("data", chunk => {})
req.on("end", () => {})
```

基本流程：

``` text
浏览器
  ↓
发送请求
  ↓
Node.js
  ↓
读取 req
  ↓
处理数据
  ↓
res 返回结果
  ↓
浏览器
```

------------------------------------------------------------------------

# 八、RESTful API

常见方法：

  方法     常见用途
  -------- --------------
  GET      获取数据
  POST     新增数据
  PUT      修改整个资源
  PATCH    修改部分资源
  DELETE   删除数据

例如：

``` text
GET    /users
GET    /users/1
POST   /users
PUT    /users/1
DELETE /users/1
```

------------------------------------------------------------------------

# 九、Express

原生 Node.js 可以做服务器，但代码比较繁琐。

Express 可以帮助我们更方便地：

-   创建服务器
-   配置路由
-   处理中间件
-   接收请求
-   返回响应

安装：

``` bash
npm install express
```

基本服务器：

``` js
const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("hello express")
})

app.listen(3000)
```

------------------------------------------------------------------------

# 十、Express 路由

``` js
app.get("/users", (req, res) => {
  res.send("用户列表")
})
```

动态参数：

``` js
app.get("/users/:id", (req, res) => {
  console.log(req.params.id)
})
```

查询参数：

``` text
/users?id=10
```

读取：

``` js
req.query.id
```

------------------------------------------------------------------------

# 十一、中间件

可以把中间件理解成：

``` text
请求
 ↓
中间件
 ↓
中间件
 ↓
路由
 ↓
响应
```

例如：

``` js
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})
```

重点：

``` text
next()
```

表示继续往后执行。

------------------------------------------------------------------------

# 十二、静态资源

Express 可以提供：

``` text
HTML
CSS
JS
图片
```

例如：

``` js
app.use(express.static("public"))
```

------------------------------------------------------------------------

# 十三、JSON 数据

前端和后端经常交换 JSON。

对象：

``` js
const user = {
  name: "tom",
  age: 18
}
```

转换成 JSON 字符串：

``` js
JSON.stringify(user)
```

JSON 字符串转换成 JS 对象：

``` js
JSON.parse(str)
```

记忆：

``` text
JS对象
  ↓ stringify
JSON字符串
  ↓ parse
JS对象
```

------------------------------------------------------------------------

# 十四、数据库方向

Node.js 后续通常会进入数据库。

需要理解：

``` text
前端
 ↓ Ajax / fetch
Node.js / Express
 ↓
数据库
```

常见数据库：

-   MySQL
-   MongoDB
-   Redis

如果课程使用 MongoDB，需要继续学习：

-   数据库
-   集合
-   文档
-   CRUD
-   查询
-   更新
-   删除

------------------------------------------------------------------------

# 十五、Node.js 学习路线

推荐顺序：

``` text
JavaScript 基础
      ↓
Ajax / HTTP
      ↓
Node.js 基础
      ↓
模块 CommonJS
      ↓
npm
      ↓
fs / path / url / events
      ↓
HTTP Server
      ↓
GET / POST
      ↓
RESTful API
      ↓
Express
      ↓
路由
      ↓
中间件
      ↓
数据库
      ↓
登录 / Cookie / Session / JWT
      ↓
全栈项目
```

------------------------------------------------------------------------

# 十六、你现在最应该关注什么

如果你刚学完 Ajax，不要一开始就背 Node.js 的所有 API。

先搞懂这 5 个关系：

``` text
1. 浏览器
       ↓
2. HTTP 请求
       ↓
3. Node.js 服务器
       ↓
4. 服务器处理数据
       ↓
5. HTTP 响应
       ↓
浏览器
```

然后再学习：

``` text
Node.js
  ↓
Express
  ↓
API
  ↓
数据库
```

这样以后学习登录、注册、商品列表、分页、增删改查时会非常容易串起来。

------------------------------------------------------------------------

# 十七、公开学习资料

-   Node.js 官方网站：https://nodejs.org/
-   MDN：https://developer.mozilla.org/zh-CN/
-   JavaScript 教程：https://wangdoc.com/javascript/
-   Node.js 中文资料仓库：https://github.com/nodejscn/node-api-cn
-   Node.js 学习路线：https://github.com/qufei1993/Nodejs-Roadmap
