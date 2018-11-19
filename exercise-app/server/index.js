const express = require("express");
const exercise = require("./controller");

const app = express();


const port = 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  
  
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/public"));
app.use("/", exercise);

app.listen(port);
console.log("Exercise App has started!");