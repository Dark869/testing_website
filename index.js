const express = require("express");
const app = express();
const morgan = require("morgan");

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.sendFile('C:\\Users\\Victor\\Desktop\\proyect\\web\\index.html');
});

//starting the server
app.listen(app.get('port'), () => {
    console.log("Server running on port " + app.get('port'));
});