'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var widgets = [
	{ id: 1, name: 'Icons' },
	{ id: 2, name: 'Buttons' },
	{ id: 3, name: 'Scroll Bars' }
];

// Get all widgets.
router.get('/', function(req, res, next) {
	res.status(200).json(widgets);
});

// Get a specific widget.
router.get('/:id', function(req, res, next) {

	// Find specific widget.
	var widget = _(widgets)
		.find(function(value) {
			return value.id	== req.params.id;		
		});

	// If widget was not found set as empty object.
	if (_.isEmpty(widget)) {
		widget = {};
	}

	res.status(200).json(widget);
});

module.exports = router;
