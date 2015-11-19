var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
    res.render('story', { title: 'STORY', name: req.param("id") });
});

module.exports = router;
