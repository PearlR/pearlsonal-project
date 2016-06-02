var express = require('express')
var router = express.Router()
var control = require('../control')
// var filter = require('lodash.filter')

// this is temporary - remove once database in?
var currentRestaurants = {
  title: 'Cheap Eat\'s',
  restaurants: []
}

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', currentRestaurants);
})

router.get('/restaurants', function (req, res, next){
  console.log(req.params)
  console.log(req.query)
  control.getGeoRestaurants(req.query.lat, req.query.lon)
  .then(function (restaurants){
    var cheapRestaurants = filterCheapRestaurants(restaurants.nearby_restaurants)
    // currentRestaurants.restaurants = cheapRestaurants
    // update the record of current restaurants we know about
    var currentRestaurants = {
      title: 'Cheap Eat\'s',
      restaurants: cheapRestaurants
    }
    res.render('restaurants', currentRestaurants)
  })
})

router.get('/restaurants/:id', function (req, res, next){
  res.render('/:id')
})


function filterCheapRestaurants(restaurants) {
  return Object.keys(restaurants)
          .map(function (key) {
            return restaurants[key].restaurant
          })
          .filter(function (restaurant) {
            return restaurant.average_cost_for_two <= 50
              || restaurant.price_range < 3
          })
}

// // POST from location field
// router.post('/', function (req, res, next){
//   control.getGeoRestaurants(req.body.lat, req.body.lon)
//     .then(function (restaurants){
//       var cheapRestaurants = filterCheapRestaurants(restaurants.nearby_restaurants)
//       // currentRestaurants.restaurants = cheapRestaurants
//       // update the record of current restaurants we know about 

//       res.json({restaurants: cheapRestaurants})
//     })
//     .catch(console.log)
// })

module.exports = router;
