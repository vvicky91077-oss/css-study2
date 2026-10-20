<template>
  <div class="todo-page">
    <div class="app">
      <h1>📝 To Do List</h1>

      <!-- 新增事项 -->
      <form class="add-form" @submit.prevent="addTodo">
        <input
          ref="input"
          v-model.trim="newText"
          type="text"
          placeholder="输入待做事项，回车添加"
          maxlength="100"
          autocomplete="off"
        />
        <button type="submit">添加</button>
      </form>

      <!-- 待做事项 -->
      <div class="section">
        <div class="section-title">
          <span>待做事项 <span class="count">{{ pending.length }}</span></span>
        </div>
        <ul class="list">
          <li v-for="todo in pending" :key="todo.id" class="item">
            <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo.id)" />
            <span class="text">{{ todo.text }}</span>
            <span class="time">{{ formatTime(todo.createdAt) }}</span>
            <button class="del-btn" type="button" title="删除" @click="deleteTodo(todo.id)">×</button>
          </li>
          <li v-if="!pending.length" class="empty">暂无待做事项 🎉</li>
        </ul>
      </div>

      <!-- 已完成事项 -->
      <div class="section">
        <div class="section-title">
          <span>已完成事项 <span class="count">{{ done.length }}</span></span>
          <button
            class="clear-btn"
            type="button"
            :style="{ visibility: done.length ? 'visible' : 'hidden' }"
            @click="clearDone"
          >清空已完成</button>
        </div>
        <ul class="list">
          <li v-for="todo in done" :key="todo.id" class="item done">
            <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo.id)" />
            <span class="text">{{ todo.text }}</span>
            <span class="time">{{ formatTime(todo.createdAt) }}</span>
            <button class="del-btn" type="button" title="删除" @click="deleteTodo(todo.id)">×</button>
          </li>
          <li v-if="!done.length" class="empty">还没有完成的事项</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY = 'todo-list-demo'

// 数据结构：{ id, text, done, createdAt }
function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch (e) {
    return []
  }
}

export default {
  name: 'TodoList',
  data() {
    return {
      newText: '',
      todos: load()
    }
  },
  computed: {
    pending() {
      return this.todos.filter((t) => !t.done)
    },
    done() {
      return this.todos.filter((t) => t.done)
    }
  },
  watch: {
    // 任何改动都自动写入本地存储
    todos: {
      deep: true,
      handler(val) {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        } catch (e) {
          // 隐私模式等情况下存储不可用，忽略
        }
      }
    }
  },
  methods: {
    formatTime(ts) {
      const d = new Date(ts)
      const pad = (n) => String(n).padStart(2, '0')
      return `${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
    },
    addTodo() {
      if (!this.newText) return
      this.todos.unshift({
        id: Date.now() + Math.random().toString(16).slice(2),
        text: this.newText,
        done: false,
        createdAt: Date.now()
      })
      this.newText = ''
      this.$refs.input.focus()
    },
    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id)
      if (todo) todo.done = !todo.done
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
    clearDone() {
      this.todos = this.todos.filter((t) => !t.done)
    }
  }
}
</script>

<style scoped>
.todo-page {
  min-height: 100vh;
  padding: 32px 16px;
  box-sizing: border-box;
  background: #f3f4f8;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #1f2333;
}

.todo-page * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  max-width: 520px;
  margin: 0 auto;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

h1 {
  font-size: 22px;
  margin-bottom: 16px;
}

/* 输入区 */
.add-form {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.add-form input {
  flex: 1;
  min-width: 0;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d7dae3;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}

.add-form input:focus {
  border-color: #6644fe;
}

.add-form button {
  height: 40px;
  padding: 0 18px;
  border: 0;
  border-radius: 8px;
  background: #6644fe;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.add-form button:hover {
  background: #5535e8;
}

/* 分组 */
.section + .section {
  margin-top: 24px;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 600;
}

.count {
  display: inline-block;
  min-width: 22px;
  padding: 0 6px;
  border-radius: 11px;
  background: #eceaff;
  color: #6644fe;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
}

.clear-btn {
  border: 0;
  background: none;
  color: #9aa0b1;
  font-size: 12px;
  cursor: pointer;
}

.clear-btn:hover {
  color: #e5484d;
}

/* 列表 */
.list {
  list-style: none;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 4px;
  border-bottom: 1px solid #f0f1f5;
}

.item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #6644fe;
  cursor: pointer;
  flex-shrink: 0;
}

.item .text {
  flex: 1;
  font-size: 14px;
  word-break: break-all;
}

.item.done .text {
  color: #9aa0b1;
  text-decoration: line-through;
}

.item .time {
  color: #b4b9c6;
  font-size: 12px;
  flex-shrink: 0;
}

.item .del-btn {
  border: 0;
  background: none;
  color: #c4c8d3;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  flex-shrink: 0;
}

.item .del-btn:hover {
  color: #e5484d;
}

.empty {
  padding: 16px 0;
  color: #b4b9c6;
  font-size: 13px;
  text-align: center;
}
</style>
