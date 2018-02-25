const express = require('express')
const router = express.Router()
const User = require('../db/models/userModel')

    router.post('/:userId', (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                user.recipes.push(req.body)
                return user.save()
            })
            .then(user => res.json(user))
            .catch((error) => { console.log(error) })
    })

    router.get('/list/:userId', (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {res.json(user.recipes)})
            .catch((error) => { console.log(error) })
    })




module.exports = router