var express = require('express')
var router = express.Router()
var control = require('../control')
var filter = require('lodash.filter')

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cheap Eat\'s' });
  console.log('HIIIIIII I\'M THE INDEX.JS!')
})

// POST from location field
router.post('/', function (req, res, next){
  control.getCityObj(req.body.citysearch)
    .then(control.searchForRestaurants)
    .then(function (restaurants){
      var cheapRestaurants = filter(restaurants, function (restaurant){
        return restaurant.restaurant.average_cost_for_two <= 60
      })
      console.log(cheapRestaurants)
    })

    .catch(console.log)
})

module.exports = router;
