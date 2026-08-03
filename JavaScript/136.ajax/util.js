//当转进的值跟headers里面的Content-Type是application/json的时候
// data要转成json字符串
function queryStringify(obj) {
    let str = ''
    for (let k in obj) str += `${k}=${obj[k]}&`

    //name=viki&password=123& 
    //去掉最后一个&
    return str.slice(0, -1)
}

//封装ajax
function ajax(options) {
    let defaultoptions = {
        url: "",
        method: "GET",
        async: true,
        data: {},
        headers: {},
        success: function () { },
        error: function () { }
    }
    let { url, method, async, data, headers, success, error } =
        { ...defaultoptions, ...options }

    console.log(url, method, async, data, headers, success, error)




    if (typeof data === 'object' && headers['Content-Type']
        ?.indexOf('application/json') > -1) {
        data = JSON.stringify(data)
    }
    else {
        data = queryStringify(data)
    }


    //如果是get请求，并且有参数，直接组装url信息
    if (/^get$/i.test(method) && data) url += '?' + data


    //4.发送请求
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, async)
    xhr.onload = function () {
        if (!/^2\d{2}$/.test(xhr.status)) {
            //加括号等于执行
            error(`错误代码: ${xhr.status}`)
            return
        }

        //执行解析
        try {
            let result = JSON.parse(xhr.responseText)
            success(result)

        } catch (err) {
            error('解析失败!因为后端返回的结果不是json格式')
        }
    }


    //设置请求头内信息
    for (let k in headers) xhr.setRequestHeader(k, headers[k])
    if (/^get$/i.test(method)) {
        xhr.send()
    } else {
        xhr.send(data)
    }

}
