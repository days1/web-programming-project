const exercises = require("./exercises");

class Database{
    constructor(){
        this.users = [];
        this.exercises = exercises;
    }

    login(name, fbid, access_token){
        let user = this.getUser(name);
        if(!user){
            user = new User(name, fbid);
            this.users.push(user);
        }
        user.access_token = access_token;
        return user;
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
    constructor(name, fbid){
        this.name = name;
        this.id = fbid;
        this.weight;
        this.exercisesList = [];
        this.friendsList = [];
        this.foodDiary = [];

    }
    
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getWeight(){
        return this.weight;
    }

    showExercises(){
        return this.exercisesList;
    }

    showFriends(){
        return this.friendsList;
    }

    showFoodDiary(){
        return this.foodDiary;
    }

    addExercise(exercise, link){
        this.exercisesList.push({exercise: exercise, link: link});
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

    changeWeight(newWeight){
        const previousWeight = this.weight;
        this.weight = newWeight;
        if(this.weight > previousWeight){
            return ("You've gained " + (this.weight - previousWeight) + " pounds.")
        } else if (this.weight < previousWeight){
            return ("You've lost " + Math.abs(this.weight - previousWeight) + " pounds.");
        } else
            return("You've maintained your weight.");
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