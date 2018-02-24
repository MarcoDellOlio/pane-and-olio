const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecipeSchema = new Schema(
  {
    name: {type: String, required: true},
    recipeId: {type: String, required: true}
  },
  {
    timestamps: {},
  }
)

const GroceryListSchema = new Schema(
  {
    ingredientsList : [],
    groceryStoreAddress : {type: String}
  },
  {
    timestamps: {},
  }
)

const UserSchema = new Schema(
  {
    username: { type: String},
    name: { type: String},
    picture: {type: String},
    email: {type: String, required: true},
    id_token: {type: String},
    recipes : [RecipeSchema],
    groceryList : [GroceryListSchema]
  },
  {
      timestamps: {},
      usePushEach: true
  }
);


module.exports = {
  UserSchema,
  GroceryListSchema,
  RecipeSchema
}