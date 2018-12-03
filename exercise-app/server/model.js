const exercises = require("./exercises");

class Database{
    constructor(){
        this.users = [];
        this.exercises = exercises;
    }

    login(name, id, access_token){
        let user = this.getUser(id);
        if(!user){
            user = new User(name, id);
            this.users.push(user);
        }
        user.access_token = access_token;
        return user;
    }

    showUsers(){
        return this.users;
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

    getUser(id){
        var index = this.users.findIndex(x => x.id == id);
        return this.users[index];
    }
}

class User{
    constructor(name, id){
        this.name = name;
        this.id = id;
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
        if(this.exercisesList.find(x => x.exercise == exercise)){
            return;
        } 
        else {
            this.exercisesList.push({exercise: exercise, link: link});
        }
    }

    removeExercise(exercise){
        var i = this.exercisesList.findIndex(x => x.exercise == exercise);
        this.exercisesList.splice(i, 1);
    }

    addFriend(friend){
        if(this.friendsList.find(x => x.name == friend)){
            return false;
        } 
        else {
            this.friendsList.push(friend);
        }
    }

    removeFriend(friend){
        var i = this.friendsList.findIndex(x => x.name == friend);
        this.friendsList.splice(i, 1);
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