const express = require('express')
const router = express.Router(({ mergeParams: true }))
const User = require('../db/models/userModel')

router.post('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
             const isIngredientInDB = user.groceryList.findIndex((ingredient) => {
                return parseInt(ingredient.ingredientId) === req.body.ingredientId
            })
                if (isIngredientInDB !== -1) {
                    user.ingredientsList.splice(isRecipeInDB,1,req.body)
                }
                else {
                    user.groceryList.push(req.body)
                }          
            user.save()
            return user.groceryList
        })
        .then(groceryList => res.json({groceryList}))
        .catch((error) => { console.log(error) })
})

router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {return user.groceryList})
        .then(groceryList => res.json({groceryList}))
        .catch((error) => { console.log(error) })
})

router.delete('/:productId', (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
       user.groceryList.id(req.params.productId).remove()
       user.save()
       return user.groceryList
    })
    .then(groceryList => res.json(groceryList))
})

module.exports = router