var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log(req);
	var list = {}
	var dbRef = req.db.ref('/todos-fb')

	dbRef.on('value', (snapshot) => {
		list = snapshot.val()
	})
  	res.render('index', { title: 'Todo app', todo_list: list });
});

module.exports = router;
