<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand logo-font" href="/">
          <img src="http://chittagongit.com/images/excercise-icon/excercise-icon-17.jpg" width="40" height="40" alt="logo">
      </a>
      <button class="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#navleft" 
      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navright" 
         aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse w-100 order-3" id="navright">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a @click="login" class="nav-link" exact-active-class="active" scope="public_profile,email"
                    onlogin="checkLoginState();">
                        Login / Sign Up
                    </a>
                    <a v-if="userId() !== null" class="nav-link" exact-active-class="active">
                        Profile
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss">
    body {
        padding-top: 75px;
    }
    
    .navbar-brand {
        position: absolute;
        left: 50%;
        text-align: center;
        margin: auto;
    }
</style>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';

export default {
    data: function(){
        return {
            loggedIn: false
        }
    },
    methods: {
        login(){
            fb.FBLogin();
        },
        userId: () => api.userId
    }
}
</script>