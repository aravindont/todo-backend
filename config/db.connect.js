const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb", conn.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectToDb };
