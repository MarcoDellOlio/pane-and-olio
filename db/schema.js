const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema(
  {
    name: {type: String, required: true},
    description : {type: String},
    ingredientId: {type: String, required: true},
    present : {type: Boolean},
    inCart : {type: Boolean},
    numberInCart : {type: Number}
  },
  {
    timestamps: {},
  }
)

const RecipeSchema = new Schema(
  {
    name: {type: String, required: true},
    recipeId: {type: String, required: true},
    isSaved: {type: Boolean},
    ingredientsList : [IngredientSchema]
  },
  {
    timestamps: {},
  }
)

const GroceryListSchema = new Schema(
  {
    ingredientsList : [IngredientSchema],
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
    groceryList : [IngredientSchema]
  },
  {
      timestamps: {},
      usePushEach: true
  }
);


module.exports = {
  UserSchema,
  GroceryListSchema,
  RecipeSchema,
  IngredientSchema
}