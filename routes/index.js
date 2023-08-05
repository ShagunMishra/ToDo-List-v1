const express = require('express');
const app = express();
const controllers = require('../controllers');
const middlewares = require('../middlewares');

// Mounting routes with middlewares and controllers
app.get("/", controllers.getTodoList)

app.post("/", middlewares.validateRequestBody, controllers.createTodoItem);

app.get("/work", controllers.getWorkList);

module.exports = app;