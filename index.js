require("dotenv").config();
const express = require("express");
const app = express();

// Importing the todo router
const todoRouter = require("./routes/todo.routes");
// Importing the task router
const taskRouter = require("./routes/task.routes");

// Importing the search router
const searchRouter = require("./routes/search.routes");
// Connecting to the database
require("./config/db.connect").connectToDb();

// Middleware for parsing incoming JSON data
app.use(express.json());

// Middleware for parsing incoming URL-encoded data
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Namaste" });
});
// Routes
app.use("/todo", todoRouter);
app.use("/task", taskRouter);
app.use("/search", searchRouter);
// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
