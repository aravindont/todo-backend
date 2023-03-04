const { TodoModel } = require("../model/todo.model");

// Method POST
// Adds todo to Database

const addTodo = async (req, res) => {
  try {
    const { userId, title, task } = req.body;
    /**exit the function early if the condition is not met */
    if (!(title || userId)) {
      return res.status(400).json({
        staus: 400,
        message: "userid or title cannot be empty",
      });
    }
    const todo = new TodoModel({ userId, title });
    if (Array.isArray(task)) task.forEach((e) => todo.tasks.push(e));
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Failed to save Todo to database",
      error: error,
    });
  }
};

// Method GET
// Fetches all todos along with taks for perticular user

const getTodos = async (req, res) => {
  try {
    const { userId } = req.params;
    const todos = await TodoModel.find({ userId }).sort("-updatedAt");
    if (todos.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**Method:DELETE deletes todo and tasks inside the todo */

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const todo = await TodoModel.findByIdAndDelete(id).exec();
    if (!todo) {
      return res.status(404).json({
        message: "Invalid id",
      });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**Method:PUT edit the todo */

const editTodo = async (req, res) => {
  try {
    const { id, newTitle } = req.body;
    const todo = await TodoModel.findByIdAndUpdate(
      id,
      { title: newTitle },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Invalid id" });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getTodos, addTodo, deleteTodo, editTodo };
