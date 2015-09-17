'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.status(200).json({ all: 'all widgets' });
});

router.get('/:id', function(req, res, next) {
	res.status(200).json({ id: req.params.id });
});

module.exports = router;
