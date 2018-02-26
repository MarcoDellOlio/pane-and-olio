const express = require('express')
const router = express.Router(({ mergeParams: true }))
const User = require('../db/models/userModel')

    router.post('/', (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                user.recipes.push(req.body)
                return user.save()
            })
            .then(user => res.json(user))
            .catch((error) => { console.log(error) })
    })

    router.get('/', (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {res.json(user.recipes)})
            .catch((error) => { console.log(error) })
    })

    router.get('/')




module.exports = router