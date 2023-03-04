const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo,
} = require("../controllers/todo.controller");

router.get("/:userId", getTodos);
router.post("/", addTodo);
router.delete("/", deleteTodo);
router.put("/", editTodo);

module.exports = router;
