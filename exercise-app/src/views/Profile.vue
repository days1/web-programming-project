<template>
  <div class="container-fluid" id="profile">
    <h1>Hello, {{name}}!</h1>
    <div class="container-fluid border border-secondary rounded shadow-sm p-4 mb-4 bg-white">
      <ul>
        <li>
          <div> 
            <p>Weight: {{this.weight}} </p>
            <form class="weightForm">
              <input type="text" v-model="weight" placeholder="Enter to update weight!">
              <a id="changeWeight" @click.stop.prevent="changeWeight(weight)"><font-awesome-icon icon="weight"/></a>
            </form>
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
                  <a @click="removeExercise(data.exercise, data.link)" class="remove">
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
          <div class="container">
            <ul>
              <li v-for="(data,index) in friendsList" :key="index" id="friend">
                {{data}}
                <a @click="removeFriend(data)" class="friendRemove">
                      <font-awesome-icon icon="minus"/>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form class="form-inline" >
              <input class="form-control form-control-sm mr-3 w-75" type="text" 
                placeholder="Type name to search users" aria-label="Search" v-model="search">
              <font-awesome-icon icon="search" aria-hidden="true"/>
            </form>
         </div>
          <div>
            <ul>
              <li v-for="(data,index) in filterUsers" :key="index" id="friend" target="_blank">
                {{data}}
                <a @click.prevent="addFriend(data)" class="add">
                  <font-awesome-icon icon="plus-circle"/>
                </a>
              </li>
            </ul>
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
      weight: "",
      previousWeight: "",
      exerciseList: null,
      friendsList: null,
      usersList: this.getUsers(),
      search: ""
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
    filterUsers(){
      return this.usersList.filter(x => {
        return x.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    getUsers(){
      api.Users()
        .then(x => {
          if (!this.usersList) {
            this.usersList = [];
          }
          for (var i in x) {
            this.usersList.push(x[i].name);
          }
          return this.usersList;
      });
    },
    addFriend(name){
      if(this.friendsList.indexOf(name) !== -1){
        alert(name + " is already on your friends list!")
      } else {
        api.AddFriend(name)
        .then(x => {
          if(!this.friendsList)
            this.friendsList = [];
          for(var i in x)
            this.friendsList.push(x[i])
        })
      }
    },
    removeFriend(name){
      this.friendsList.splice(this.friendsList.indexOf(name), 1);
      api.RemoveFriend(name)
        .then(x => {
          if(!x.friendsList){
            this.friendsList = [];
          } else {
            this.friendsList = x.friendsList;
          }
        })
    },
    removeExercise(exercise, link) {
      this.exerciseList.splice(this.exerciseList.indexOf(exercise), 1);
      api.RemoveExercise(exercise, link)
        .then(x => this.exercisesList = x.exercisesList);
    },
    changeWeight(weight) {
      this.previousWeight = this.weight;
      this.weight = weight;
      api.ChangeWeight(weight)
        .then(x => {
          if(this.weight > this.previousWeight){
              alert ("You've gained " + (this.weight - this.previousWeight) + " pounds.")
          } else if (this.weight < this.previousWeight){
              alert ("You've lost " + Math.abs(this.weight - this.previousWeight) + " pounds.");
          } else{
              alert ("You've maintained your weight.");
          }
        })
    },

    userId: () => api.userId
  }
};
</script>

<style lang="scss">

li {
  list-style: none;
}

.add {
  cursor: pointer;
  float: right;
  padding-right: 35px;
}

.friendRemove{
  cursor: pointer;
  float: right;
  padding-right: 35px;
}

.remove {
  float: right;
  cursor: pointer;
}

#changeWeight {
  cursor: pointer;
  padding-left: 30px;
}

#friend {
    padding-top: 20px;
}
</style>

