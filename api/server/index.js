'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

// Support json encoded bodies.
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routing middleware.
app.use('/api/widget', require('./routes/widget'));

// Error handling middleware must be after all other middleware and routing.
// Handle error in development mode.
if (app.get('env') === 'development') {
    console.log('running in dev mode');
    app.use(function (err, req, res, next) {
        res.status(500).json(err.stack);
    });

// Handle error in production mode.
} else {
    console.log('running in production mode');
    app.use(function (err, req, res, next) {
        res.status(500).json(err.message);
    });
}

app.listen(port, function () {
    console.log('Listening server on port ' + port);
});
