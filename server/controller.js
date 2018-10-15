const express = require("express");
const {User} = require("./model");

const app = express.Router();

app.get("/", (req, res) =>{
    res.send("Exercise App Home Page!");
});

app.get("/users", (req, res) =>{
    res.send({users: User.users});
});
app.post("/users", (req, res) =>{
    const user = new User(req.body.name, req.body.username, req.body.password);
    User.users.push(user);
    res.send({user: user});
});

app.get("/exercises", (req, res) =>{
    res.send("Page for listing exercise");
});

app.get("/users", (req,res) =>{
    res.send("Shows all the users");
});


module.exports = app;