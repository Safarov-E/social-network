<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Добро пожаловать в динамические компоненты!</h1>
    <router-link :to="{name: 'home'}">Главная</router-link>
    <router-link :to="{name: 'login'}">Логин</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Login from './components/Login'
// import Register from './components/Register'
// import Stories from './components/Stories'

// Vue.filter('capitalize', function(value) {
//   return value.charAt(0).toUpperCase() + value.substr(1)
// })
export default {
  name: 'App',
  components: {
    // Login,
    // Register,
    // Stories
  },
  data() {
    // return {
    //   pages: [
    //     'stories',
    //     'register',
    //     'login'
    //   ],
    //   activePage: 'stories'
    // }
  },
  // methods: {
  //   setPage(newPage) {
  //     this.activePage = newPage
  //   },
  //   isActivePage(page) {
  //     return this.activePage === page
  //   }
  // }
}
</script>

<style>

</style>
