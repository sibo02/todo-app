const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "../data/todos.json");

function readTodos() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function saveTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

router.get("/", (req, res) => {
  const todos = readTodos();

  res.json(todos);
});
router.post("/", (req, res) => {
  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  todos.push(newTodo);

  saveTodos(todos);

  res.status(201).json(newTodo);
});

module.exports = router;