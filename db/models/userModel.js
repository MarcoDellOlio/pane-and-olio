const mongoose = require('mongoose')
const findOrCreate = require('find-or-create')
const Schema = require('../schema')
const User = mongoose.model('User', Schema.UserSchema)

module.exports = User