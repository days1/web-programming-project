const exercises = require("./exercises");

class Database{
    constructor(){
        this.users = [];
        this.exercises = [exercises];
    }

    showExercises(){
        return this.exercises;
    }
    addUser(user){
        this.users.push(user);
    }

    removeUser(user){
        this.users.splice(user);
    }

    addExercise(exercise){
        this.exercises.push(exercise);
    }

    removeExercise(exercise){
        this.exercises.splice(exercise);
    }

    getUser(username){
        var index = this.users.findIndex(user => user.username === username);
        return this.users[index];
    }
}

class User{
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.password = password;
        this.exercises = [];
        this.friendsList = [];
        this.foodDiary = [];

    }
    
    getName(){
        return this.name;
    }

    getUsername(){
        return this.username;
    }

    showExercises(){
        return this.exercises;
    }

    showFriends(){
        return this.friendsList;
    }

    showFoodDiary(){
        return this.foodDiary;
    }

    addExercise(exercise){
        this.exercises.push(exercise);
    }

    removeExercise(exercise){
        this.exercises.splice(exercise);
    }

    addFriend(friend){
        this.friendsList.push(friend);
    }

    removeFriend(friend){
        this.friendsList.splice(friend);
    }

    addFoodEntry(foodEntry){
        this.foodDiary.push(foodEntry);
    }

    removeFoodEntry(foodEntry){
        this.foodDiary.splice(foodEntry);
    }
}

class FoodEntry{
    constructor(date, time, food){
        this.date = date;
        this.time = time;
        this.food = food;
    }
}

module.exports = {Database, User, FoodEntry};