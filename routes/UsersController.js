const express = require('express')
const router = express.Router()
const User = require('../db/models/userModel')



router.post('/', (req, res) => {
 
    const userData = req.body.localStorage
    const name = userData.name
    const email = userData.email
    const username = userData.username
    const id_token = userData.id_token
    const picture = userData.picture

    const user = { name, email, id_token, picture}

    User.findOneAndUpdate({email},{name, email, username, picture},{upsert : true, new : true})
    .then(user => res.json(user))
    .catch((error) => { console.log(error) })
})



module.exports = router