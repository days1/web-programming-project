

class Database{
    constructor(){
        this.users = [];
        this.exercises = [];
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
}

class User{
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.password = password;
        this.exercises = [{}];
        this.friendsList = [{}];

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

    displayFriends(){
        this.friendsList.forEach(function (user){
            console.log(user);
        })
    }

    displayExercises(){
        this.exercises.forEach((user) => console.log(user));
    }

}

module.exports = {Database, User};