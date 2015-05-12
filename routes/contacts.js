var router = require('express').Router();

// path is /contacts

router.get('/', function (req, res) {
    // console.log(req);
    res.status(200).json({
        message: 'IMPL_101'
    });
});

router.post('/', function (req, res) {
    res.render('contact', { user: req.body });
    /*res.status(200).json({
        message: 'Received request from front end ... ',
        received: req.body
    });*/
});

module.exports = router;



