<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navleft" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
        <div class="collapse navbar-collapse w-100 order-1 order-md-0" id="navleft">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" exact-active-class="active" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" exact-active-class="active" to="/exercises">Exercises</router-link>
                </li>
            </ul>
        </div>
        <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="/">
                <img src="http://chittagongit.com/images/excercise-icon/excercise-icon-17.jpg" width="40" height="40" alt="">
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navright" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
        <div class="collapse navbar-collapse w-100 order-3" id="navright">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" exact-active-class="active" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" exact-active-class="active" to="/signup">Sign Up</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            show: false
        }
    }
}
</script>


