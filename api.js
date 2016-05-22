var request = require('superagent')

require('dotenv').config()

// function search (object, callback){
//   request
//   .get('https://developers.zomato.com/api/v2.1/search')
//   .set('Accept', 'application/json')
//   .set('user-key', process.env.X_API_KEY)
//   .query(object)
//   .end(function(err, res){
//     if (err) {
//       throw err
//       } else {
//         callback(res.body.categories)
//       }
//     })
// }

function cities (callback){
request
.get('https://developers.zomato.com/api/v2.1/cities?q=wellington')
.set('Accept', 'application/json')
.set('user-key', process.env.X_API_KEY)
// .query({cities: 'wellington'})
.end(function(err, res){
  if (err) {
    throw err
    } else {
      console.log(res.body)
    }
  })
}

cities(function(res){
  console.log(res)
})


function categories (callback){
  request
  .get('https://developers.zomato.com/api/v2.1/categories')
  .set('Accept', 'application/json')
  .set('user-key', process.env.X_API_KEY)
  .end(function(err, res){
    if (err) {
      throw err
      } else {
        callback(res.body.categories)
      }
    })
}

categories(function(res){
  console.log(res)
})
