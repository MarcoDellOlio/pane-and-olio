const express = require('express')
const router = express.Router(({ mergeParams: true }))
const User = require('../db/models/userModel')

router.post('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.groceryList.push(req.body)
            user.save()
            return user.groceryList
        })
        .then(groceryList => res.json(groceryList))
        .catch((error) => { console.log(error) })
})

module.exports = router