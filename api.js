// var request = require('superagent')

// require('dotenv').config()

// // API FUNCTIONS ---------------------------------

// // Uses the city that the user puts into a field and brings back an object with a city ID
// // function cities (city){
// // request
// // .get('https://developers.zomato.com/api/v2.1/cities?q=' + city)
// // .set('Accept', 'application/json')
// // .set('user-key', process.env.X_API_KEY)
// // .end()
// // }

// // Brings back an object using the city ID returned from the
// // function searchForRestaurants (id) {
// //   request
// //   .get('https://developers.zomato.com/api/v2.1/categories')
// //   .set('Accept', 'application/json')
// //   .set('user-key', process.env.X_API_KEY)
// //   .query(id)
// //   .end(function(err, res){
// //     if (err) {
// //       throw err
// //       } else {
// //         console.log(res.body)
// //       }
// //     })
// // }

// // Brings back an object based on category that has been specified
// function categories (callback){
//   request
//   .get('https://developers.zomato.com/api/v2.1/categories')
//   .set('Accept', 'application/json')
//   .set('user-key', process.env.X_API_KEY)
//   .end(function(err, res){
//     if (err) {
//       throw err
//       } else {
//         console.log('CATS!')
//       }
//     })
// }

// module.exports = {
//   // cities: cities,
//   // searchForRestaurants: searchForRestaurants,
//   categories: categories
// }
