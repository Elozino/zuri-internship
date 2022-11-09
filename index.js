import express from "express";
import router from "./routes/postRoutes.js";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/", router);

const dbURI =
  "mongodb+srv://Elozino:zuri1234@zuri-internship-cluster.dfxvkrn.mongodb.net/zuri-todo-app?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT, console.log("connect to db")))
  .catch((err) => console.log(err));

// app.listen(PORT, ()=> console.log("Running"))
