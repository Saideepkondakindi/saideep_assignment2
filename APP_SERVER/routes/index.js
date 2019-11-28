//saideep kondakindi 8579211//
var express = require('express');
var router = express.Router();

const ctrlFood = require('../controllers/food.js');

/* GET homepage. */
router.get('/', ctrlFood.home);
router.get('/aboutMovie', ctrlFood.about);
router.get('/Movielist', ctrlFood.Movielist);


module.exports = router;
