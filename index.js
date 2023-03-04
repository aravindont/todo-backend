require("dotenv").config();
const express = require("express");
const app = express();

// Importing the todo router
const todoRouter = require("./routes/todo.routes");

// Connecting to the database
require("./config/db.connect").connectToDb();

// Middleware for parsing incoming JSON data
app.use(express.json());

// Middleware for parsing incoming URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/todo", todoRouter);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
