var router = require('express').Router();

router.get('/', function (req, res) {
    res.render('upload');
});

module.exports = router;