<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script>

  import MainHeader from './components/main-header.vue'

  export default {
    name: 'app',
    components: {
      MainHeader
    }
  }
</script>
