const { TodoModel } = require("../model/todo.model");

const createTask = async (req, res) => {
  try {
    const { id, task } = req.body;

    if (!id || !task) {
      return res.status(400).json({
        message: "Task and id are required",
      });
    }

    const todo = await TodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Invalid id" });
    }

    todo.tasks.push(task);
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id, key } = req.body;

    const todo = await TodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Invalid id" });
    }

    todo.tasks.splice(key, 1);
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const editTask = async (req, res) => {
  try {
    const { id, key, newTask } = req.body;

    const todo = await TodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Invalid id" });
    }

    todo.tasks[key] = newTask;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { createTask, deleteTask, editTask };
