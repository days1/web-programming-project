<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  width: 100%;
} 

body{
  background-color: #EEEEEE;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}

</style>
