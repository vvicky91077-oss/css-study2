const STORAGE_KEY = 'ToDo-List-Demo'
//替换数组的初始化,这样打开页面时，先读取保存的任务，再显示到页面。
let todos = load()

const $form = document.getElementById('formId')
const $input = document.getElementById('inputId')
const $todoCount = document.getElementById('todoCount')
const $doneCount = document.getElementById('doneCount')
const $todolist = document.getElementById('listId')
const $donelist = document.getElementById('donelistId')
const $clearDone = document.getElementById('clearId')

//保存
function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
    catch (e) {
        console.log("保存失败", e)
    }
}

//读取
function load() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    }
    catch (e) {
        return []
    }
}

//输入+提交
$form.addEventListener('submit', (e) => {
    // 页面不刷新，你可以用 JavaScript 自己保存任务。
    e.preventDefault()
    const text = $input.value.trim()
    if (!text) return

    addTodo(text)
    $input.value = ''
    $input.focus()

    // console.log(text)
})



//放进数组
function addTodo(text) {
    todos.unshift({
        id: Date.now() + Math.random().toString(16).slice(2),
        text: text,
        done: false,
        ABC: Date.now()
    })
    save()
    render()
    // console.log(todos)
}


//时间函数
function formatTime(ts) {
    const d = new Date(ts)

    const pad = (n) => String(n).padStart(2, '0')
    //把时间戳转换成日期对象，才能取出月份、日期、小时等。
    return `${pad(d.getMonth() + 1)}月${pad(d.getDate())}日 ${pad(d.getHours())}:${pad(d.getMinutes())}`


}


//渲染到页面
function render() {
    $todolist.innerHTML = ''
    $donelist.innerHTML = ''

    todos.forEach((todo) => {
        const li = document.createElement('li')
        li.className = 'todoS'
        // li.textContent = todo.text

        //创建checkbox
        const checkbox = document.createElement('input')
        checkbox.className = 'checkbox'
        checkbox.type = 'checkbox'
        checkbox.checked = todo.done

        checkbox.addEventListener('change', () => {
            toggleTodo(todo.id)
        })

        //创建内容
        const text = document.createElement('span')
        text.className = 'textS'
        text.textContent = todo.text
        text.style.textDecoration = todo.done ? 'line-through' : ' none'

        //创建时间
        const time = document.createElement('span')
        time.className = 'timeS'
        time.textContent = todo.ABC ? formatTime(todo.ABC) : ''



        //创建删除按钮
        const del = document.createElement('button')
        del.className = 'delS'
        del.type = 'button'
        del.textContent = '×'

        //点击时，删除当前这条任务
        del.addEventListener('click', () => {
            deleteTodo(todo.id)
        })

        li.append(checkbox, text, time, del)

        if (todo.done) {
            $donelist.appendChild(li)
        }
        else {
            $todolist.appendChild(li)
        }
    })

    //遍历结束后 点数量
    const pending = todos.filter((t) => !t.done)
    const done = todos.filter((t) => t.done)

    if (!pending.length) {
        const empty = document.createElement('li')
        empty.className = 'empty'
        empty.textContent = 'No pending tasks yet 🎉'
        $todolist.appendChild(empty)
    }
    if (!done.length) {
        const empty = document.createElement('li')
        empty.className = 'empty'
        empty.textContent = 'No completed tasks yet'
        $donelist.appendChild(empty)
    }


    //数量统计
    $todoCount.textContent = pending.length
    $doneCount.textContent = done.length

    //清楚按钮显示与隐藏
    $clearDone.style.visibility = done.length ? 'visible' : 'hidden'



}

//修改数据 ☑️
function toggleTodo(id) {
    const todo = todos.find((t) => t.id == id)
    if (!todo) return

    todo.done = !todo.done

    save()
    render()
}

//删除数组内容
function deleteTodo(id) {
    //filter() 返回新数组，再赋值给 todos
    todos = todos.filter((t) => t.id !== id)

    save()
    render()
}

$clearDone.addEventListener('click', clearDone)

function clearDone() {
    todos = todos.filter((t) => !t.done)
    save()
    render()
}

render()