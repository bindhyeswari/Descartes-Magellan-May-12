var router = require('express').Router();
var multer = require('multer');
router.use(multer({
    dest: './uploads/'
}));

router.get('/', function (req, res) {
    res.render('upload');
});

router.post('/', function (req, res) {
    console.log(JSON.parse(req.body.Nina).name);
    console.log();
    res.render('upload');
});

module.exports = router;