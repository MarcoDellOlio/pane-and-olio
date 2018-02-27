const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../db/models/userModel')
const jsonp = require ('jsonp')


router.get('/', (req, res) => {
    console.log(req.query.lat)
    const lat = req.query.lat
    const long = req.query.long
    
    axios('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyDYbh3tSR6de5IORKRGLDqduykDq_aJUo0')
    .then(data => console.log(data))
})



  





module.exports = router