const mongoose = require('mongoose')
const Schema = require('../schema')
const GroceryList = mongoose.model('GroceryList', Schema.GroceryListSchema)

module.exports = GroceryList

