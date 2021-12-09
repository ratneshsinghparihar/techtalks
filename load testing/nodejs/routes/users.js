var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/data', function(req, res, next) {
  const test={"test":1}
  res.render(test);
});

module.exports = router;
