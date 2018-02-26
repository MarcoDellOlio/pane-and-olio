const mongoose = require('mongoose')
const Schema = require('../schema')
const Ingredient = mongoose.model('Ingredient', Schema.IngredientSchema)

module.exports = Ingredient