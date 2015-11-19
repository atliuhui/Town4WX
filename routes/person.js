var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
    res.render('person', { title: 'PERSON', name: req.param("id") });
});

module.exports = router;
