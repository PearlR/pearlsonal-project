var express = require('express')
var router = express.Router()
var control = require('../control')

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cheap Eat\'s' });
  console.log('HIIIIIII I\'M THE INDEX.JS!')
})

// POST from location field
router.post('/', function (req, res, next){
  control.getCityObj(req.body.citysearch)
    .then(control.searchForRestaurants)
    .then(control.filterByCheapest)
    .then(console.log('hi'))
    .catch(console.log)
})

module.exports = router;
