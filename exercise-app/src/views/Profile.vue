<template>
  <div class="container-fluid" id="profile">
    <h1>Hello, {{name}}!</h1>
    <div class="row">
      <div class="col-md-3" v-for="(data,index) in exerciseList" :key="index">
        <div class="card h-100">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="data.link" allowfullscreen></iframe>
          </div>
          <div class="card-body">
            <h5 class="card-title">
                {{data.exercise}}
                <a @click="removeExercise(data.exercise, data.link)" class="add">
                    <font-awesome-icon icon="plus-square"/>
                </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "@/services/api_access";

export default {
  name: "profile",
  data() {
    return {
      name: null,
      weight: null,
      exerciseList: null
    };
  },
  created: function() {
    api.Profile().then(x => {
      (this.name = x.name), 
      (this.exerciseList = x.exercisesList);
    });
  },
  methods: {
    removeExercise(exercise, link) {
        
    },
    changeWeight() {}
  }
};
</script>

<style lang="scss">
</style>

