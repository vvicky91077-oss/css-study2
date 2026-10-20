<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goToChildPage">Child Page</button>
    <button @click="goToCheck">我要搜索🔍</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToChildPage() {
      this.$router.push({
        name: 'child'
      })
    },
    goToCheck() {
      this.$router.push({
        name: 'check'
      })
    }
  }
}
</script>
