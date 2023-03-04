const express = require("express");
const router = express.Router();

const {
  createTask,
  deleteTask,
  editTask,
} = require("../controllers/task.controller");

router.post("/", createTask);
router.delete("/", deleteTask);
router.put("/", editTask);

module.exports = router;
