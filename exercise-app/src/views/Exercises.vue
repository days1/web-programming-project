<template>
    <div class="exercises">
        <h1>Exercises Page</h1>
        <div class="row">
            <div class="col-md-3" v-for="(data,index) in exercises" :key='index'>
                <div class="card h-100">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" :src="data.link" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{data.exercise}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as api from '@/services/api_access';
export default {
    name: "exercises",
    data(){
        return {
            exercises: this.getExercises()
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
        },
        getExercises(){
            api.getExercises()
                .then(x => {
                    if (!this.exercises) {
                        this.exercises = [];
                    }
                    for (var i in x) {
                        this.exercises.push(x[i]);
                    }
                    return this.exercises;
                    // this.exercises.push(x);
                });
        }
    }
}
</script>

<style lang="scss">

</style>

