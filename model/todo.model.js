const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is Required"] },
    tasks: [String],
    userId: {
      type: String,
      required: [true, "User id is required"],
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = { TodoModel };
