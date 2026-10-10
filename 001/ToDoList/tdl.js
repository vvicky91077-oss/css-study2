const STORAGE_KEY = 'todo-list-demo'

const $form = document.getElementById('addForm')
const $input = document.getElementById('todoInput')
const $todoCount = document.getElementById('todoCount')
const $todoList = document.getElementById('todoList')
const $doneCount = document.getElementById('doneCount')
const $clearDone = document.getElementById('clearDone')
const $doneList = document.getElementById('doneList')

let todos = load()

function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
    catch (e) {
        //忽略错误
    }
}

function load() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    }
    catch (e) {
        return []
    }
}

function formatTime(ts) {
    const d = new Date(ts)
    const pad = (n) => String(n).padStart(2, '0')
    return `${pad(d.getMonth() + 1)}月${pad(d.getDate())}日
            ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function createItem(todo) {
    const li = document.createElement('li')
    li.className = 'item' + (todo.done ? ' done' : '')
    li.dataset.id = todo.id

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.done
    checkbox.dataset.action = 'toggle'

    const text = document.createElement('span')
    text.className = 'text'
    text.textContent = todo.text

    const time = document.createElement('span')
    time.className = 'time'
    time.textContent = formatTime(todo.createdAt)

    const del = document.createElement('button')
    del.className = 'del-btn'
    del.type = 'button'
    del.title = 'delete'
    del.textContent = '×'
    del.dataset.action = 'delete'

    li.append(checkbox, text, time, del)
    return li

}

function renderList($list, items, emptyText) {
    $list.innerHTML = ''
    //长度为0时显示提示
    if (!items.length) {
        const empty = document.createElement('li')
        empty.className = 'empt'
        empty.textContent = emptyText

        $list.appendChild(empty)
        return
    }
    items.forEach(
        (t) => $list.appendChild(
            createItem(t)
        )
    )
}

function render() {
    const pending = todos.filter((t) => !t.done)
    const done = todos.filter((t) => t.done)

    renderList($todoList, pending, '暂无待做事项 🎉')
    renderList($doneList, done, '还没有完成的事项')

    $todoCount.textContent = pending.length
    $doneCount.textContent = done.length
    $clearDone.style.visibility = done.length ? 'visible' : 'hidden'

}

function addTodo(text) {
    todos.unshift({
        id: Date.now() + Math.random().toString(16).slice(2),
        text: text,
        done: false,
        createdAt: Date.now()
    })
    save()
    render()
}

function toggleTodo(id) {
    const todo = todos.find((t) => t.id === id)
    if (!todo) return
    todo.done = !todo.done

    save()
    render()
}

function deleteTodo(delId) {
    todos = todos.filter((t) => t.id !== delId)
    save()
    render()
}

function clearDone() {
    todos = todos.filter((t) => !t.done)
    save()
    render()
}

// 事件
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = $input.value.trim()
    if (!text) return
    addTodo(text)
    $input.value = ''
    $input.focus()

})

//事件委托： 两个列表共用一套处理
function onListClick(e) {
    const action = e.target.dataset.action
    if (!action) return
    const id = e.target.closest('.item').dataset.id
    if (action === 'toggle') toggleTodo(id)
    if (action === 'delete') deleteTodo(id)
}

$todoList.addEventListener('click', onListClick)
$doneList.addEventListener('click', onListClick)
$clearDone.addEventListener('click', clearDone)

render()
