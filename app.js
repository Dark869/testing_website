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
    res.sendFile(__dirname + '/web/index.html');
});

app.get('/styles/style.css', (req, res) => {
    res.sendFile(__dirname + '/web/styles/style.css');
});

//starting the server
app.listen(app.get('port'), () => {
    console.log("Server running on port " + app.get('port'));
});