//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

var items = [];
var workítems = [];

app.set("view engine", "ejs") //informing our app that we are going to use ejs

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public")); //to add our static css file to the server

app.get("/", function(req, res) {

  const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  }); //render from the list of view folder
})

app.post("/", function(req, res) {

  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workítems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workítems
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
