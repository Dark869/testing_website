import express from "express";
import morgan from "morgan";

import { PORT } from "./config.js";

import indexHtml from "./routes/main.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexHtml);

//starting the server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
