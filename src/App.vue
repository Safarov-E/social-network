<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <hello></hello>
    <login></login> -->
    <register></register>
    <!-- <stories></stories> -->
  </div>
</template>

<script>
// import Login from './components/Login.vue'
// import Hello from './components/Hello.vue'
import Register from './components/Register'
// import Stories from './components/Stories'

export default {
  name: 'App',
  components: {
    // Hello,
    // Login,
    // Stories,
    Register
  },
  data(){
    return {
      stories: [
        {
          plot: 'Моя лошадь потрясающая.',
          writer: 'Мистер Уибл',
          upvotes: 28,
          voted: false
        },
        {
          plot: 'Нарвалы изобрели шашлык.',
          writer: 'Мистер Уибл',
          upvotes: 8,
          voted: false
        },
        {
          plot: 'Тёмная сторона Силы сильнее',
          writer: 'Дарт Вейдер',
          upvotes: 52,
          voted: false
        },
        {
          plot: 'Просто так в Мордор не попадёшь',
          writer: 'Боромир',
          upvotes: 74,
          voted: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
