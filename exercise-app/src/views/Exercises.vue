<template>
  <div class="container-fluid" id="exercises">
    <h1>Exercises Page</h1>
    <div class="row">
      <div class="col-md-3" v-for="(data,index) in exercises" :key="index">
        <div class="card h-100">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="data.link" allowfullscreen></iframe>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {{data.exercise}}
              <a
                @click.prevent="addExercise(data.exercise, data.link)"
                class="add"
              >
                <font-awesome-icon icon="heart"/>
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
  name: "exercises",
  data() {
    return {
      exercises: this.getExercises()
    };
  },
  methods: {
    addExercise(exercise, link) {
      if (this.userId() == null) {
        alert("Please login to add exercise to exercise list!");
      } else {
        api.AddExercise(exercise, link);
        alert(exercise + " has been favorited!")
      }
    },
    getExercises() {
      api.Exercises().then(x => {
        if (!this.exercises) {
          this.exercises = [];
        }
        for (var i in x) {
          this.exercises.push(x[i]);
        }
        return this.exercises;
        // this.exercises.push(x);
      });
    },
    userId: () => api.userId
  }
};
</script>

<style lang="scss">
.col-md-3{
  padding-bottom: 15px;
}
.add {
  cursor: pointer;
  float: right;
}
</style>

