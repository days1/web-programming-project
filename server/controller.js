const express = require("express");
const {Database, User} = require("./model");

var db = new Database();

const app = express.Router();

app.get("/", (req, res) =>{
    res.send("Exercise App Home Page!");
});

app.get("/users", (req, res) =>{
    res.send(db.users);
});

app.post("/users", (req, res) =>{
    const user = new User(req.body.name, req.body.username, req.body.password);
    db.addUser(user);
    res.send(user.username + " has been added to the database");
});

app.get("/users/:id", (req, res) =>{
    res.send(db.getUser(req.params.id));
});

app.post("users/:id", (req,res) =>{
    
})

app.get("/users/:id/friendslist", (req, res) => {
    res.send(db.getUser(req.params.id).friendsList);
})

app.get("/exercises", (req, res) =>{
    res.send(db.exercises);
});


module.exports = app;