import mongoose from "mongoose";
mongoose.set("strictQuery", false);
export const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb", conn.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
