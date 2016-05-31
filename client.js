var request = require('superagent')

console.log('clientside JS for the win!')

document.getElementById("button").addEventListener("click", function(){
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude
      var lon = position.coords.longitude
      request.post('/')
        .send({lat, lon})
        .end(function () {
          console.log('AAAHHHHHHHHHHH')
      })
  })
})

// client.js
// listen to button click
// getLocation
  // POST lat and lon to /get-food
    // 1. render html for restaurants on the client-side
    // 2. window.location = /restaurants

// Option 1
// request
//   .post({ lat: lat, lon: lon})
//   .end(function (res) {
//       var  cheapReastaurants = res.body
//       var restaurantHTML = myTemplate(cheapReastaurants)

//       $('body').append(restaurantHTML)

//   })


// app.js
// POST get-food
  // search zomato for restaurants
    // 1. res.json(cheapReastaurants)
    // 2. save  to database
    // 2. respond to client (res.send { redirect: /restaurants}
