/* var arr1 = [{
       name: "哆啦a梦",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB1RgLOpQ2sKB_00f4mz3_L-XpmfO1BaFUnt90WE0Pw&s=10"

   }, {
       name: "坏蛋爱上美人鱼",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVH7A92nWjRjgPQOSrUsUo1M6Zc6dZ4Rx2udKUCVsXg&s=10"
   }, {
       name: "小女人",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElncYihbn62koIZ_B167ckHc9H0qGep4jw0-lI8I4VQ&s=10"
   }, {
       name: "小黄人",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXp2h7GYNrtYr_4s7CpO8t_L-X60Gvu_qAcehRNioiQ&s=10"
   }, {
       name: "老太婆",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaXWnShLUKHO8C8xLs7OUHF74T8ywHtLqze2z7FNidg&s=10"
   }, {
       name: "Pretty girl",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9UCIlTG0gWfD9wJAGuXpa3MbdkC4Jgtv0h6BUCIqVw&s=10"
   }]

   var arr2 = [{
       name: "哆啦a梦",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZDUKewMpwjNVqJknxFCky5dtIH26RPZGaUtd9eSxqw&s=10"

   }, {
       name: "阿么",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNibfhvVMfYOUrTMlPdazB3-WrBhwm7heOI2pvyx3yQ&s=10"
   }, {
       name: "小女人",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WSdptDd5yJWDPkCH0NydxdLwHbzw4ODPMHt2QWFydw&s=10"
   }, {
       name: "小黄人",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY60NBQA8yaVE4PDqBNbe5N62-Xs9hlJRTJUfMcloaw&s=10"
   }, {
       name: "老太婆",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIzgRUm4zTo28kuWY6MWvaA9UH_5VCdsiwW8Z3EKC0w&s"
   }, {
       name: "Pretty girl",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKU8mjE4eZSSXkyQ2n3ji5DrBV8xNc4Zq1Ai9ZhX-Jg&s=10"
   }] */


//获取数据
var current = 0 //记录当前第几页
var onLoading = false // 记录是否正在请求（防止多次请求）
var total = 0
getList()
async function getList() {
    current++
    var res = await fetch(`http://localhost:3000/goods?_page=${current}&_limit=2`)
    var list = await res.json()

    // console.log(res.headers.get("x-total-count"))
    // 得到的是 字符串
    total = res.headers.get("x-total-count")

    renderHTML(list)

    return list

}



function renderHTML(arr) {
    for (let i = 0; i < arr.length; i++) {
        var oli = document.createElement("li")
        oli.innerHTML = `<img src= ${arr[i].poster}
                alt="">
            <h3>${arr[i].title}</h3>
            <h4>price :${arr[i].price}</h4>
            <h5>评分 :${arr[i].goodcomment}</h5>`

        oli.onclick = function () {
            console.log(arr[i].id)
            //跳转
            location.href = `./detail.html?id=${arr[i].id}`
        }
        list.appendChild(oli)
    }
}



window.onscroll = function () {

    if (list.children.length === Number(total)) {
        // console.log(list.children.length)
        return

    }

    var listHeight = list.offsetHeight
    var listTop = list.offsetTop
    var listSum = listHeight + listTop


    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    var windowHeight = document.documentElement.clientHeight
    var scrollSum = Math.round(scrollTop + windowHeight)

    if (onLoading) return
    if ((listSum - scrollSum) < 50) {

        onLoading = true


        getList().then(() => {
            onLoading = false

        })
    }
}
