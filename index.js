import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./config/db.connect.js";
import cors from "cors";

const app = express();
dotenv.config();
connectToDb();

const port = process.env.PORT || 8000;
const version = "v1";

app.use(cors({ credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});