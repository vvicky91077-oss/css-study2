<template>
  <div class="home">
    This is HomeView.vue
    <router-link to="/about">AboutView</router-link>
    <router-link to="/todolist">TodoList</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
