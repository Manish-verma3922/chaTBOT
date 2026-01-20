import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import chatbotRoutes from "./routes/chatbot.route.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Database connection setup
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// define routes


app.use("/bot/v1/", chatbotRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
