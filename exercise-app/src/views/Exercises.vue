<template>
    <div class="exercises">
        <h1>Exercises Page</h1>
        <ul>
            <li v-for="(data,index) in exercises" :key='index'><a v-bind:href="data.link">{{data.exercise}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "exercises",
    data(){
        return {
            exercises: [
                { exercise: "Push-ups", link: "https://www.youtube.com/watch?v=IODxDxX7oi4"},
                { exercise: "Crunches", link: "https://www.youtube.com/watch?v=Xyd_fa5zoEU"},
                { exercise: "Burpees", link: "https://www.youtube.com/watch?v=dZgVxmf6jkA"},
            ]
        }
    },
    methods: {
    addExercise(){
      this.$validator.validateAll().then((result) => {
        if (result){
          this.exercises.push({exercise: this.exercise});
          this.exercise = ''; 
        }
      })
    }
  }
}
</script>

