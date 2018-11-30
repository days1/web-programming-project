<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand logo-font" to="/">
          <img src="http://chittagongit.com/images/excercise-icon/excercise-icon-17.jpg" width="40" height="40" alt="logo">
      </router-link>
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
                    <router-link v-if="loggedIn" class="nav-link" exact-active-class="active" to="/profile" id="profile">
                        Profile
                    </router-link>
                </li>
                <li class="nav-item">
                    <a v-if="!loggedIn" v-on:click="login" class="nav-link" exact-active-class="active" scope="public_profile,email"
                    onlogin="checkLoginState();" href="#">
                        Login / Sign Up
                    </a>
                    <a href="/" v-else class="nav-link">
                        Logout
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

    #profile {
        float: left;
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
            fb.FBLogin()
            this.loggedIn = true;
        },
        userId: () => api.userId
    }
}
</script>