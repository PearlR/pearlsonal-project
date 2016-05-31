
// Takes the API functions and runs them to search the city,
// Then takes the returned ID then puts it in the next search function,
// Then renders the result to the page

var Promise = require('promise');
var request = require('superagent')

function getCityObj (city) {
  return new Promise(function (resolve, reject) {
    request
      .get('https://developers.zomato.com/api/v2.1/cities?q=' + city)
      .set('Accept', 'application/json')
      .set('user-key', process.env.X_API_KEY)
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          console.log('MONDAY', res.body.location_suggestions[0].id)
          resolve(res.body.location_suggestions[0].id)
        }
      })
  })
}

function getGeoRestaurants (lat, lon) {
  return new Promise(function (resolve, reject) {
    request
      .get('https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + lon)
      .set('Accept', 'application/json')
      .set('user-key', process.env.X_API_KEY)
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          console.log('TUESDAY')
          resolve(res.body)
        }
      })
  })
}

function searchForRestaurants (id) {
  return new Promise(function (resolve, reject) {
    request
      .get('https://developers.zomato.com/api/v2.1/search?entity_id=' + id + '&entity_type=city&count=10000')
      .set('Accept', 'application/json')
      .set('user-key', process.env.X_API_KEY)
      .end(function(err, res){
        if (err) {
          throw err
        } else {
          console.log('WEDNESDAY')
          var objs = []
          for(var i = 0; i < res.body.restaurants.length; i++){
            objs.push(res.body.restaurants[i])
          }
          resolve(objs)
        }
    })
  })
}

// // filter for cheapest places
// function filterByCheapest (restaurantsArray) {
//   return new Promise (function (resolve, reject) {
//     console.log('THURSDAY')
//     var priceForOne = restaurantsArray[0].restaurant.average_cost_for_two / 2
//     var array = []
//     for (var j = 0; j < restaurantsArray.length; j++)
//         if (priceForOne <= 30){
//             for(var i = 0; i < res.body.restaurants.length; i++){
//               objs.push(res.body.restaurants[i])
//         }
//       }
//     resolve()
//   })
// }

module.exports = {
  getCityObj: getCityObj,
  searchForRestaurants: searchForRestaurants,
  // filterByCheapest: filterByCheapest
  getGeoRestaurants: getGeoRestaurants
}
