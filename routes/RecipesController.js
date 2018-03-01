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

    router.get('/:recipeId', (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
               return user.recipes.id(req.params.recipeId)
            })
            .then((recipe) => {res.json(recipe)})
            .catch((error) => { console.log(error) })
    })

    router.post('/:recipeId', (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                const recipe = user.recipes.id(req.params.recipeId)
                const isRecipeInDB = recipe.ingredientsList.findIndex((ingredient) => {
                    return parseInt(ingredient.ingredientId) === req.body.ingredientId
                })
                if (isRecipeInDB !== -1) {
                    recipe.ingredientsList.splice(isRecipeInDB,1,req.body)
                }
                else {
                    recipe.ingredientsList.push(req.body)
                }

                user.save()
                return req.body
            })
            .then((ingredient) => res.json({ingredient}))
            .catch((error) => { console.log(error) })
    })




module.exports = router