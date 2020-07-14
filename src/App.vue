<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Добро пожаловать в динамические компоненты!</h1>
    <router-link :to="{name: 'home'}" exact>Главная</router-link>
    <router-link :to="{name: 'login'}">Логин</router-link>
    <router-link :to="{name: 'stories.all'}">Истории</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-link-active {
    color: green;
  }
  .fade-enter{
    opacity: 0
  }
  .fade-enter-active {
    transition: opacity 1s
  }
  .fade-enter-to {
    opacity: 0.8
  }
</style>
