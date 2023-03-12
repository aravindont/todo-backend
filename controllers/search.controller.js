const { TodoModel } = require("../model/todo.model");

// separate function to just to check todo title or task entered by user exist in database or not
const filterTodos = (todos, query) => {
  return todos.filter((todo) => {
    return (
      todo.title.includes(query) ||
      todo.tasks.some((task) => task.includes(query))
    );
  });
};

const searchController = async (req, res) => {
  try {
    const { userId, query } = req.query;
    const todos = await TodoModel.find({ userId });
    console.log(todos);
    const result = filterTodos(todos, query);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Something went wrong" });
  }
};

module.exports = { searchController };
