//third party module

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
// require('dotenv').config();
require('dotenv/config')
const uuid = require('uuid');

const PersonRouter= require('./personRoute')
app.use('/persons',PersonRouter)
//Localhost
app.listen(2500, () => {
    console.log("server Started...2500")
})
//DB Server Creation
mongoose.connect(process.env.MYDB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(() => {
        console.log("Datatabase Connected Succesfully...")
    })
    .catch(error => console.log(error));


