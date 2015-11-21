var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('home', {
        layout: 'main',
        data: {
            title: 'HOME',
            name: 'id',
            datasource: [
                {
                    imageurl: "http://7xj9d8.com2.z0.glb.qiniucdn.com/o_1a3bljrbl1tcd16lr1of71b2020j7.jpg-homepage.jpeg",
                    address: "崇礼",
                    content: "入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。"
                }, {
                    imageurl: "http://7xj9d8.com2.z0.glb.qiniucdn.com/o_1a3bljrbl1tcd16lr1of71b2020j7.jpg-homepage.jpeg",
                    address: "崇礼",
                    content: "入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。"
                }, {
                    imageurl: "http://7xj9d8.com2.z0.glb.qiniucdn.com/o_1a3bljrbl1tcd16lr1of71b2020j7.jpg-homepage.jpeg",
                    address: "崇礼",
                    content: "入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。"
                }, {
                    imageurl: "http://7xj9d8.com2.z0.glb.qiniucdn.com/o_1a3bljrbl1tcd16lr1of71b2020j7.jpg-homepage.jpeg",
                    address: "崇礼",
                    content: "入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。"
                }, {
                    imageurl: "http://7xj9d8.com2.z0.glb.qiniucdn.com/o_1a3bljrbl1tcd16lr1of71b2020j7.jpg-homepage.jpeg",
                    address: "崇礼",
                    content: "入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。入冬后北方的雪场陆续开放，离京城 300 公里的崇礼县，没有雾霾。"
                }
            ]
        }
    });
});

module.exports = router;
