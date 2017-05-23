var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

	var dbRef = req.db.ref('/products');
	dbRef.push({
		productTitle: req.body.productTitle,
		productDescription: req.body.productDescription
	});

	var holoDb = req.holoDb.ref('/products');
	holoDb.push({
		productTitle: req.body.productTitle,
		productDescription: req.body.productDescription
	});
	// console.log(req.body);
	res.redirect('/');
});



module.exports = router;
