var Promise = require('promise');
var request = require('superagent')

// Takes the API functions and runs them to search the city,
// Then takes the returned ID then puts it in the next search function,
// Then renders the result to the page

function getCityObj (city) {
  return new Promise(function (resolve, reject) {
    request
      .get('https://developers.zomato.com/api/v2.1/cities?q=' + city)
      .set('Accept', 'application/json')
      .set('user-key', process.env.X_API_KEY)
      .end(function(err, res){
        if (err) {
          throw err
        } else {
          console.log('MONDAY', res.body.location_suggestions[0].id)
          resolve(res.body.location_suggestions[0].id)
        }
      })
  })
}

function searchForRestaurants (id) {
  return new Promise(function (resolve, reject) {
    request
      .get('https://developers.zomato.com/api/v2.1/search?entity_id=' + id + '&entity_type=city')
      .set('Accept', 'application/json')
      .set('user-key', process.env.X_API_KEY)
      .end(function(err, res){
        if (err) {
          throw err
        } else {
          console.log('TUESDAY')
          console.log(res.body.restaurants.length)
          var objs = []
          for(var i = 0; i < res.body.restaurants.length; i++){
            objs.push(res.body.restaurants[i])
          }
          console.log('Got here!!!', objs)
          resolve(objs)
        }
    })
  })
}

// filter for cheapest places

function filterByCheapest (restaurantsObj) {
  return new Promise (function (resolve, reject) {
    console.log(restaurantsObj.restaurant.average_cost_for_two <= 40)
    resolve(restaurantsObj.restaurant.average_cost_for_two <= 40)
  })
}

module.exports = {
  getCityObj: getCityObj,
  searchForRestaurants: searchForRestaurants,
  filterByCheapest: filterByCheapest
}
