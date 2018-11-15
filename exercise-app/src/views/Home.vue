<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Skills msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Skills from '@/components/Skills.vue'

export default {
  name: 'home',
  components: {
    Skills
  }
}
</script>
