require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// setting view engine
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());

// mongo connection
const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 

// controller routes
const UsersController = require('./routes/UsersController')
app.use('/api/users', UsersController)

const RecipesController = require('./routes/RecipesController')
app.use('/api/users/:userId/recipes', RecipesController)

const GroceryListController = require('./routes/GroceryListController')
app.use('/api/users/:userId/grocerylist', GroceryListController)

const SmsController = require('./routes/SmsController')
app.use('/api/sms', SmsController)

const EmailController = require('./routes/EmailController')
app.use('/api/email', EmailController)

const GMapController = require('./routes/GMapController')
app.use('/api/gmap', GMapController)

const VoiceController = require('./routes/VoiceController')
app.use('/api/voice', VoiceController)

// redirect to the home page
app.get('*', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

// server connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})

