var express = require('express')
var router = express.Router()
var api = require('../api')

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cheap Eat\'s' });
  console.log('HIIIIIII')
})

// POST from location field
router.post('/', function (req, res, next){
  api.cities(req.body.citysearch, function (res){
    cityName = res
    res.send(cityName)
    return cityName
  })
})

module.exports = router;
