const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../db/models/userModel')
const jsonp = require ('jsonp')


router.get('/', (req, res) => {
    console.log(req.query.lat)
    const lat = req.query.lat
    const long = req.query.long
           
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1000&types=grocery_or_supermarket&key=AIzaSyDYbh3tSR6de5IORKRGLDqduykDq_aJUo0`)
    .then(data => res.json(data.data.results))
})



  





module.exports = router