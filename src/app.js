import express from 'express';
import morgan from "morgan";

import {PORT} from './config.js';

import indexHtml from './routes/main.routes.js';

const app = express();

// Routes
app.use(indexHtml);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//starting the server
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});