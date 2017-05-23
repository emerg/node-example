var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// define needed variables
	var products = {}
	var dbRef = req.db.ref('/todos-fb');

	dbRef.on('value', (snapshot) => {
		products = snapshot.val()
	})


	// render selected 'products' template
	res.render('products', { title: 'Product Page View Rendered', products: products});
});

/* GET listing. */
router.get('/simple-product', function(req, res, next) {
	// console.log(req);

  	res.render('index', { title: 'Todo app', todo_list: list });
});


// router.post('/', function(req, res, next) {

// 	var dbRef = req.db.ref('/products');
// 	dbRef.push({
// 		productTitle: req.body.productTitle
// 		productDescription: req.body.productDescription
// 	});
// 	// console.log(req.body);
// 	res.redirect('/');
// });



module.exports = router;
