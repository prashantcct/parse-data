var express = require('express');
var router = express.Router();

var parse_text_controller = require('../controllers/parseTextController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
	res.json({message: 'Hello World'});
})

router.get('/parse', parse_text_controller.getParseNameCount);

module.exports = router;
