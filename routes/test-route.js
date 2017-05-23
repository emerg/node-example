var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	res.render('test.view', {id: req.params.id });
})

router.get('/foo/:id', function(req, res, next) {
	// console.log(req.params)
	// var viewParams = req.params.id;
	var viewParams = {
		id: req.params.id,
		apple: 'Jason Likes Apples'
	}

	res.render('testview', viewParams);
})

module.exports = router;