const express = require("express");
const {Users, User} = require("./model");

var users = new Users();

const app = express.Router();

app.get("/", (req, res) =>{
    res.send("Exercise App Home Page!");
});

app.get("/users", (req, res) =>{
    res.send(users.displayUsers);
});

app.post("/users", (req, res) =>{
    const user = new User(req.body.name, req.body.username, req.body.password);
    users.addUser(user);
    res.send(user);
});

app.get("/exercises", (req, res) =>{
    res.send("Page for listing exercise");
});

app.get("/users", (req,res) =>{
    res.send("Shows all the users");
});


module.exports = app;