var request = require('superagent')

console.log('clientside JS for the win!')

document.getElementById("button").addEventListener("click", function(){
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude
    var lon = position.coords.longitude
    console.log(lat, lon)

    document.location = `/restaurants?lat=${lat}&lon=${lon}`
    // request.post('/')
    //   .send({lat, lon})
    //   .end(function (err, data) {
    //     if (err) { console.err("there was an error!", err) }
    //     else { console.log('yay, I got a response:', data) }
    //   })
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
