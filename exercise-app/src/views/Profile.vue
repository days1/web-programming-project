<template>
  <div class="container-fluid" id="profile">
    <h1>Hello, {{name}}!</h1>
    <div class="container-fluid border border-secondary rounded shadow-sm p-4 mb-4 bg-white">
      <ul>
        <li>
          <div class=""> 
            Weight: {{weight}}
            <a @click="changeWeight"></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h5>Favorite Exercises</h5>
        <div class="card-columns">
          <div class="card"  v-for="(data,index) in exerciseList" :key="index">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" :src="data.link" allowfullscreen></iframe>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                  {{data.exercise}}
                  <a  @click="removeExercise(data.exercise, data.link)" class="remove">
                      <font-awesome-icon icon="minus"/>
                  </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
      </div>
      <div class="col">
          <h5>Friends List</h5>
          <form class="form-inline" >
            <input class="form-control form-control-sm mr-3 w-75" type="text" 
              placeholder="Friends Name" aria-label="Search" v-model="search">
            <font-awesome-icon icon="search" aria-hidden="true"/>
          </form>
            <ul>
              <li v-for="(data,index) in friendsList" :key="index">
                {{data.friend}}
              </li>
            </ul>
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
      exerciseList: null,
      friendsList: null
    };
  },
  created: function() {
    api.Profile()
      .then(x => {
        this.name = x.name, 
        this.exerciseList = x.exercisesList,
        this.friendsList = x.friendsList
    });
  },
  computed:{
    filterUsers: function(){
      api.Users()      
    }
  },
  methods: {
    addFriend(name){
      
    },
    removeExercise(exercise, link) {
      this.exerciseList.splice(this.exerciseList.indexOf(exercise), 1);
      api.RemoveExercise(exercise, link)
        .then(x => this.exercisesList = x.exercisesList);
    },
    changeWeight() {}
  }
};
</script>

<style lang="scss">

.remove {
  cursor: pointer;
  float: right;
}

li {
  list-style: none;
}
</style>

