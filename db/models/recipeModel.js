const mongoose = require('mongoose')
const Schema = require('../schema')
const Recipe = mongoose.model('Recipe', Schema.RecipeSchema)

module.exports = Recipe