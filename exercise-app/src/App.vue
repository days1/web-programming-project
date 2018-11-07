<template>
<div>
    <h1> {{msg}} </h1>
    <Nav/>
    <router-view/>
</div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'home',
  components: {
    Nav
  },
  data () {
    return {
      msg: 'New Paltz Fitness'
    }
  }
}

</script>

<style>

</style>
