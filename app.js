const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const url = process.env.DB_CONNECTION;

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/studios', studiosRoute);
app.use('/films', filmsRoute);

//Import routes
const studiosRoute = require('./routes/studios');
const filmsRoute = require('./routes/films');


//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connection to DB!
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
})




// Listening...
app.listen(4000);