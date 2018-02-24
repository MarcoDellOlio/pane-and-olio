require('dotenv').config()
const mongoose = require('mongoose')
const UserModel = require('./models/userModel')
const RecipeModel = require('./models/recipeModel')
const GroceryListModel = require('./models/groceryListModel')


  
  mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })
  
  mongoose.connection.on('error', (error) => {
    console.error(`
      MongoDB connection error!!! 
      ${error}
    `)
    process.exit(-1)
  })

// Pull in Models from the `schema.js`
const marco = new UserModel({ username: 'mrcdll', name: 'marco', email: "marco@marco.it", id_token: "73gs7sg" })
const jon = new UserModel({ username: 'jonjon', name: 'jon', email: "jon@jon.com", id_token: "ANB7635" })
const jean = new UserModel({ username: 'Jinnnn', name: 'Jean', email: "jean@jam.com", id_token: "kjsdkhd33" })

const pulledPork = new RecipeModel({name: "pulled pork", recipeId : "jibwd4jn"})
const orangeDuck = new RecipeModel({name: "Duck with orange", recipeId : "rgrewvs"})
const vegetarian = new RecipeModel({name: "vegetarian stuff", recipeId : "fsveb"})

const monday = new GroceryListModel({ingredientsList: ['bread', 'can', 'beans'], groceryStoreAddress : "here"})
const tuesday = new GroceryListModel({ingredientsList: ['pork', 'banana', 'cheackpeas'], groceryStoreAddress : "812 bana road"})
const sunday = new GroceryListModel({ingredientsList: ['grass', 'pears', 'fish'], groceryStoreAddress : "somewhere over the rainbow"})

marco.recipes = [pulledPork, orangeDuck]
marco.groceryList = [monday]
jon.recipes = [vegetarian, pulledPork]
jon.groceryList = [tuesday]
jean.recipes = [vegetarian]
jean.groceryList = [sunday]

// Database setup
mongoose.connect(process.env.MONGODB_URI)
.then(() => {return UserModel.remove({})})
.then(() => {return GroceryListModel.remove({})})
.then(() => {return marco.save();})
.then(() => {return jon.save();})
.then(() => {return jean.save();})
.then(() => { mongoose.connection.close()})
.then(() => {console.log('db seeded')})


   

