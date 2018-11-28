const express = require("express");
const {Database, User, FoodEntry} = require("./model");

var db = new Database();

const app = express.Router();

app.get("/", (req, res) =>{
    res.send("Exercise App Home Page!");
});

app.get("/exercises", (req, res) =>{
    res.send(db.showExercises());
});

app.get("/users/:id", (req, res) =>{
    var user = db.getUser(req.params.id);
    res.send(
        {
            "Name": user.getName(),
            "Username": user.getUsername(),
            "Exercises": user.showExercises(),
            "Friends": user.showFriends()
        }
    );
});

app.post("/users", (req, res) =>{
    var user = db.login(req.body.name, req.body.fbid);
    res.send(user);
});

app.post("/users/:id/exerciseList", (req, res) =>{
    var user = db.login(req.body.name, req.body.fbid);
    user.addExercise(req.body.exercise, req.body.link);
    console.log(user);
    res.send(user.showExercises());
});

// app.post("/users/:id/exerciseList", (req, res) =>{
//     db.getUser(req.params.id).addExercise(req.body.exercise);
//     res.send(req.body.exercise + " has been added to exercise list");
// });

app.get("/users/:id/friendsList", (req, res) =>{
    res.send(db.getUser(req.params.id).showFriends());
});

app.post("/users/:id/friendsList", (req, res) =>{
    db.getUser(req.params.id).addFriend(req.body.username);
    res.send(req.body.username + " has been added to friendslist");
});

app.get("/users/:id/foodDiary", (req, res) =>{
    res.send(db.getUser(req.params.id).showFoodDiary());
});

app.post("/users/:id/foodDiary", (req, res) =>{
    var foodEntry = new FoodEntry(req.body.date, req.body.time, req.body.food)
    db.getUser(req.params.id).addFoodEntry(foodEntry);
    res.send(foodEntry.food + " has been added to food diary");
});

app.post("/users/:id/weighIn", (req, res) =>{
    res.send(db.getUser(req.params.id).changeWeight(req.body.weight));
});

module.exports = app;