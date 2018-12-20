<template>
  <div class="home">
    <h1>Exercise Challenge of the Day</h1>
    <v-select label="exercise" @search="search" :options="results">
      Search Exercise
    </v-select>
  </div>
</template>

<script>
import * as api from "@/services/api_access";

export default {
  name: 'home',
  data() {
    return {
      results:[]
    }
  },
  methods: {
    search(search){
      api.ExerciseSearch(search).then(x => {
        if (!this.results) {
          this.exercises = [];
        }
        for (var i in x) {
          this.results.push(x[i]);
        }
        return this.results;
      });
    },

  }
}
</script>

<style lang="scss">

body {
  font-family: 'Open Sans', sans-serif;
  color: #3f3f3f;
}

small {
  display: block;
  color: #ccc;
  font-size: .65em;
  margin-top: .35em;
}

#app {
  max-width: 35em;
  margin: 1em auto;
}

</style>

