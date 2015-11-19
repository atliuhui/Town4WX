var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
    res.render('venue', { title: 'VENUE', name: req.param("id") });
});

module.exports = router;
