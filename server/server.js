import express from "express";
import dotenv from "dotenv";
import { notes } from "./data/notes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
