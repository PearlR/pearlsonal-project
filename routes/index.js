var express = require('express')
var router = express.Router()
var control = require('../control')
// var filter = require('lodash.filter')

var currentRestaurants = {
  title: 'Cheap Eat\'s',
  restaurants: []
}

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', currentRestaurants);
  console.log('HIIIIIII I\'M THE INDEX.JS!')
})

router.get('/restaurants', function (req, res, next){
  res.render('restaurants', currentRestaurants)
})

// POST from location field
router.post('/', function (req, res, next){
  console.log(req.body.lat, req.body.lon)
  control.getGeoRestaurants(req.body.lat, req.body.lon)
    // .then(control.searchForRestaurants())
    .then(function (restaurants){
      console.log('RESTAURANTS', restaurants)
      // console.log('RESTAURANTS 1ST', restaurants.nearby_restaurants['1'].restaurant)
      var cheapRestaurants = Object.keys(restaurants.nearby_restaurants)
        .map(function (key) {
          return restaurants.nearby_restaurants[key].restaurant
        })
        .filter(function (restaurant) {
          return restaurant.average_cost_for_two <= 50
            || restaurant.price_range < 3
        })
      currentRestaurants.restaurants = cheapRestaurants
      // ???? REDIRECTS IN A POST ROUTE ??????
      res.redirect('/restaurants')
    })
    .catch(console.log)
})

module.exports = router;
