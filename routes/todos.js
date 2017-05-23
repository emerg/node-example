var express = require('express');
var router = express.Router();

/* POST new todo. */
router.post('/', function(req, res, next) {

	var dbRef = req.db.ref('/todos-fb');
	dbRef.push({
		task: req.body.todoInputName
	});
	// console.log(req.body);
	res.redirect('/');
});

router.delete('/:id', function (req, res, next){
	// console.log(req.params)
	req.db.ref('/todos-fb').child(req.params.id).remove();
	res.end();
});

module.exports = router;
