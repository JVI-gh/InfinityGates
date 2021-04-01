//const mySecret = process.env['ps'];
//Imports and const declaration
const mySecret = '8LI4HMVDNoAetqsQ';
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

//Creating app intance for app
const app = express();

//Adding morgan por app, morgan takes cares of http request
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Importing middleware functions, it used JWT and passport
require('./api/middleware/auth.js');

//Declaration of routes for the app
const indexRoute = require('./api/routes/index.js');

//Connection to database
mongoose.connect("mongodb+srv://IGAdmin:" + mySecret + "@infinitygates.t8owz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//Declaration of allowed headers for http request
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Indicating that app have to use a declared route
app.use('/', indexRoute);

//Error control for not found routes
app.use((err, req, res, next) => {
    const error = new Error('Not found');
    err.status(404);
    next(error);
});

//Error control for any other error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

//Exporting the app to the server, then server mounts the app
module.exports = app;