require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = process.env.PORT || 3000;

// connect database
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


app.use(express.json());
app.use("/api", authRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// send data to backend
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');

});

app.get('/home', (req, res) => {
    res.send('Secret');
});


app.listen(port, () => console.log(`Listening on port ${port}...`));