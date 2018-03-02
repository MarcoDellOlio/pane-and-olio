import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import axios from 'axios'
import RecipeCard from './RecipeCard'

class RecipeCardList extends Component {

   
    

    render() {

      // const list = this.props.recipes
      
      // the line below uses a local recipe list
      const list = recipeslist 
    
      const recipes = list.map((recipe) => {
        return ( <RecipeCard key={recipe.id} {...recipe}/>)
      })

      return (
        <RecipesCardBoard>
          {recipes}
        </RecipesCardBoard>
      );
    }
  }
  
  export default RecipeCardList;


  const RecipesCardBoard = Wrapper.extend`
    flex-direction : row;
    flex-wrap : wrap;
    height : auto;
  `

  const recipeslist = [
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 6,
      "preparationMinutes": 15,
      "cookingMinutes": 15,
      "sourceUrl": "http://www.sugarfreemom.com/recipes/sugar-free-dairy-free-mini-carrot-zucchini-muffins/",
      "spoonacularSourceUrl": "https://spoonacular.com/sugar-free-dairy-free-mini-carrot-zucchini-muffins-609286",
      "aggregateLikes": 66,
      "spoonacularScore": 35,
      "healthScore": 3,
      "creditText": "Sugar Free Mom",
      "sourceName": "Sugar Free Mom",
      "pricePerServing": 45.12,
      "extendedIngredients": [
        {
          "id": 9019,
          "aisle": "Canned and Jarred",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/applesauce.jpg",
          "consistency": "solid",
          "name": "applesauce",
          "amount": 2,
          "unit": "tablespoons",
          "originalString": "2 tablespoons unsweetened applesauce",
          "metaInformation": [
            "unsweetened"
          ]
        },
        {
          "id": 18371,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
          "consistency": "solid",
          "name": "baking powder",
          "amount": 0.5,
          "unit": "teaspoon",
          "originalString": "½ teaspoon baking powder",
          "metaInformation": []
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
          "consistency": "solid",
          "name": "baking soda",
          "amount": 0.25,
          "unit": "teaspoon",
          "originalString": "¼ teaspoon baking soda",
          "metaInformation": []
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/carrots.jpg",
          "consistency": "solid",
          "name": "carrot",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "¼ cup grated carrot",
          "metaInformation": [
            "grated"
          ]
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg",
          "consistency": "solid",
          "name": "egg",
          "amount": 1,
          "unit": "",
          "originalString": "1 egg, room temperature",
          "metaInformation": [
            "room temperature"
          ]
        },
        {
          "id": 98887,
          "aisle": "Health Foods;Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/sanding-sugar.png",
          "consistency": "solid",
          "name": "erythritol",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "¼ cup erythritol",
          "metaInformation": []
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png",
          "consistency": "solid",
          "name": "flour",
          "amount": 0.5,
          "unit": "cup",
          "originalString": "½ cup plus 2 tablespoons gluten free flour ( I used Bob's Red Mill)",
          "metaInformation": [
            "gluten free",
            "red",
            "( I used Bob's Mill)"
          ]
        },
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          "consistency": "solid",
          "name": "ground cinnamon",
          "amount": 1,
          "unit": "teaspoon",
          "originalString": "1 teaspoon ground cinnamon",
          "metaInformation": []
        },
        {
          "id": 10811111,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/stevia-drops.jpg",
          "consistency": "solid",
          "name": "liquid stevia",
          "amount": 0.5,
          "unit": "teaspoon",
          "originalString": "½ teaspoon vanilla liquid stevia",
          "metaInformation": []
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "amount": 3,
          "unit": "tablespoons",
          "originalString": "3 tablespoons olive oil",
          "metaInformation": []
        },
        {
          "id": 11477,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg",
          "consistency": "solid",
          "name": "zucchini",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "¼ cup grated zucchini",
          "metaInformation": [
            "grated"
          ]
        }
      ],
      "id": 609286,
      "title": "Sugar Free & Dairy Free Mini Carrot Zucchini Muffins",
      "readyInMinutes": 30,
      "image": "https://spoonacular.com/recipeImages/609286-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [],
      "dishTypes": [
        "morning meal",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
      },
      "instructions": "Preheat oven to 350 degrees. Line 12 mini muffin cups with silicone or paper liners.In a bowl, whisk the first 6 ingredients together.In a separate bowl, whisk the applesauce, oil, egg and liquid stevia.Add the flour mixture to the wet ingredients and stir until just combined.Mix in the carrot and zucchini.Fill the muffin cups with batter and bake 15 minutes until light golden brown.Cool 5 minutes in pan then transfer to a wire rack to finish cooling completely.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 350 degrees. Line 12 mini muffin cups with silicone or paper liners.In a bowl, whisk the first 6 ingredients together.In a separate bowl, whisk the applesauce, oil, egg and liquid stevia.",
              "ingredients": [
                {
                  "id": 10811111,
                  "name": "liquid stevia",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/stevia-drops.jpg"
                },
                {
                  "id": 9019,
                  "name": "applesauce",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/applesauce.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404676,
                  "name": "muffin liners",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-or-cupcake-forms.png"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add the flour mixture to the wet ingredients and stir until just combined.",
              "ingredients": [
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Mix in the carrot and zucchini.Fill the muffin cups with batter and bake 15 minutes until light golden brown.Cool 5 minutes in pan then transfer to a wire rack to finish cooling completely.",
              "ingredients": [
                {
                  "id": 11477,
                  "name": "zucchini",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
                },
                {
                  "id": 11124,
                  "name": "carrot",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/carrots.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404676,
                  "name": "muffin liners",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-or-cupcake-forms.png"
                },
                {
                  "id": 405900,
                  "name": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "creditsText": "Sugar Free Mom"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 8,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 10,
      "preparationMinutes": 10,
      "cookingMinutes": 10,
      "sourceUrl": "http://www.copykat.com/2009/02/02/party-cracker-mix/",
      "spoonacularSourceUrl": "https://spoonacular.com/party-cracker-mix-599209",
      "aggregateLikes": 31,
      "spoonacularScore": 13,
      "healthScore": 1,
      "creditText": "Copy Kat",
      "sourceName": "Copy Kat",
      "pricePerServing": 53.9,
      "extendedIngredients": [
        {
          "id": 18621,
          "aisle": "Savory Snacks",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/crackers.jpg",
          "consistency": "solid",
          "name": "ritz crackers",
          "amount": 1,
          "unit": "box",
          "originalString": "1 box of Ritz crackers.",
          "metaInformation": []
        },
        {
          "id": 1062047,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic-salt.jpg",
          "consistency": "solid",
          "name": "garlic salt",
          "amount": 2,
          "unit": "teaspoons",
          "originalString": "2 teaspoons garlic salt",
          "metaInformation": []
        },
        {
          "id": 4639,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/ranch-dressing.jpg",
          "consistency": "liquid",
          "name": "ranch dressing",
          "amount": 1,
          "unit": "package",
          "originalString": "1 package Ranch House Dressing",
          "metaInformation": []
        },
        {
          "id": 1042047,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
          "consistency": "solid",
          "name": "seasoned salt",
          "amount": 1,
          "unit": "teaspoon",
          "originalString": "1 teaspoon seasoned salt",
          "metaInformation": []
        },
        {
          "id": 93728,
          "aisle": "Savory Snacks",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/saltine-crackers.jpg",
          "consistency": "solid",
          "name": "wheat thin crackers",
          "amount": 1,
          "unit": "box",
          "originalString": "1 box of wheat thin crackers",
          "metaInformation": [
            "thin"
          ]
        },
        {
          "aisle": "?",
          "name": "cheese crackers",
          "amount": 1,
          "unit": "box",
          "originalString": "1 box of cheese crackers",
          "metaInformation": []
        },
        {
          "aisle": "?",
          "name": "salad oil",
          "amount": 1,
          "unit": "cup",
          "originalString": "1 cup salad oil",
          "metaInformation": []
        }
      ],
      "id": 599209,
      "title": "Party Cracker Mix",
      "readyInMinutes": 20,
      "image": "https://spoonacular.com/recipeImages/599209-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "dairy free"
      ],
      "occasions": [],
      "winePairing": {},
      "instructions": "Or any three types of crackers of your choice.Mix well. Better when stands overnight.   Store in airtight containers.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Or any three types of crackers of your choice.",
              "ingredients": [
                {
                  "id": 18621,
                  "name": "crackers",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/crackers.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Mix well. Better when stands overnight.   Store in airtight containers.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "creditsText": "Copy Kat"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 45,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 8,
      "preparationMinutes": 25,
      "cookingMinutes": 8,
      "sourceUrl": "http://lemon-sugar.com/2013/07/vanilla-coconut-banana-cream-pie.html/",
      "spoonacularSourceUrl": "https://spoonacular.com/vanilla-coconut-banana-cream-pie-579664",
      "aggregateLikes": 199,
      "spoonacularScore": 42,
      "healthScore": 4,
      "creditText": "Lemon Sugar",
      "sourceName": "Lemon Sugar",
      "pricePerServing": 205.68,
      "extendedIngredients": [
        {
          "id": 9040,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
          "consistency": "solid",
          "name": "bananas",
          "amount": 3,
          "unit": "",
          "originalString": "3 ripe bananas",
          "metaInformation": [
            "ripe"
          ]
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
          "consistency": "solid",
          "name": "butter",
          "amount": 8,
          "unit": "Tablespoons",
          "originalString": "8 Tablespoons melted butter",
          "metaInformation": [
            "melted"
          ]
        },
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg",
          "consistency": "solid",
          "name": "cream cheese",
          "amount": 8,
          "unit": "ounces",
          "originalString": "8 ounces cream cheese, softened",
          "metaInformation": [
            "softened"
          ]
        },
        {
          "id": 18617,
          "aisle": "Sweet Snacks",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/graham-crackers.jpg",
          "consistency": "solid",
          "name": "graham crackers",
          "amount": 12,
          "unit": "ounces",
          "originalString": "12 ounces graham crackers",
          "metaInformation": []
        },
        {
          "id": 1053,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg",
          "consistency": "liquid",
          "name": "heavy whipping cream",
          "amount": 3,
          "unit": "cups",
          "originalString": "3 cups heavy whipping cream",
          "metaInformation": []
        },
        {
          "id": 19206,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/instant-vanilla-pudding.jpg",
          "consistency": "solid",
          "name": "instant vanilla pudding",
          "amount": 3.4,
          "unit": "ounce",
          "originalString": "1 box (3.4 ounce) instant vanilla pudding",
          "metaInformation": []
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg",
          "consistency": "liquid",
          "name": "milk",
          "amount": 1,
          "unit": "cup",
          "originalString": "1 cup milk",
          "metaInformation": []
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "originalString": "1/2 teaspoon salt",
          "metaInformation": []
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png",
          "consistency": "solid",
          "name": "sugar",
          "amount": 0.3333333333333333,
          "unit": "cup",
          "originalString": "1/3 cup sugar",
          "metaInformation": []
        },
        {
          "id": 12109,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/coconut-shredded.jpg",
          "consistency": "solid",
          "name": "sweetened coconut",
          "amount": 0.5,
          "unit": "cup",
          "originalString": "1/2 cup sweetened flaked coconut",
          "metaInformation": [
            "sweetened",
            "flaked"
          ]
        },
        {
          "id": 1095,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/evaporated-milk.png",
          "consistency": "solid",
          "name": "sweetened condensed milk",
          "amount": 14,
          "unit": "ounce",
          "originalString": "1 (14 ounce) can sweetened condensed milk",
          "metaInformation": [
            "sweetened",
            "canned"
          ]
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg",
          "consistency": "liquid",
          "name": "vanilla extract",
          "amount": 1,
          "unit": "Tablespoon",
          "originalString": "1 Tablespoon vanilla extract",
          "metaInformation": []
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/water.jpg",
          "consistency": "liquid",
          "name": "water",
          "amount": 1,
          "unit": "Tablespoons",
          "originalString": "1-2 Tablespoons water (if necessary)",
          "metaInformation": [
            "(if necessary)"
          ]
        }
      ],
      "id": 579664,
      "title": "Vanilla Coconut Banana Cream Pie",
      "readyInMinutes": 105,
      "image": "https://spoonacular.com/recipeImages/579664-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [],
      "dishTypes": [],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "lambrusco dolce",
          "late harvest riesling",
          "vin santo"
        ],
        "pairingText": "Lambrusco Dolce, Late Harvest Riesling, and Vin Santo are great choices for Pie. These wines are all sweet, which is important since wine should usually be sweeter than the food you're pairing with it.",
        "productMatches": []
      },
      "instructions": "Preheat oven to 375 degrees (F).  Spray a 9-inch pie plate with cooking spray, set aside.In a food processor, pulse graham crackers to a coarse crumb.Add sugar, salt and butter, and pulse until crumbs are moistened.  Crumbs should stick together when pinched.  If they don't stick, add water a teaspoon at a time until proper consistency is met.Pour mixture into greased pie plate, and press down to evenly cover bottom and sides of pan.Bake for 8 minutes.  Allow to cool completely before filling.In a large, clean bowl (or the bowl of a stand mixer) beat whipping cream until it begins to thicken (about 2 minutes but can be up to 5 minutes.)Add sugar and vanilla, and beat until thick and creamy.  Set aside, or empty into another bowl if using stand mixer.)In a measuring cup, whisk together instant pudding and 1 cup of milk.  Set aside.In another bowl (or now-empty stand mixer bowl), beat cream cheese until light and fluffy.Add vanilla pudding mixture and sweetened condensed milk, and beat until smooth and slightly thickened.Fold in half of the whipped cream mixture.  Reserve the remaining whipped cream for topping.Pour a small amount (about a cup or so) of filling into cooled crust.  Spread evenly over bottom.Slice bananas, and line bottom and sides of crust with sliced bananas.Pour remaining filling over banana slices.Top filling with remaining whipped cream.Refrigerate for at least one hour.  Cover with plastic wrap if necessary.Before serving, toast coconut flakes over medium heat in a non-stick skillet until golden brown.  Garnish pie with additional sliced bananas and toasted coconut.Enjoy!",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 375 degrees (F).  Spray a 9-inch pie plate with cooking spray, set aside.In a food processor, pulse graham crackers to a coarse crumb.",
              "ingredients": [
                {
                  "id": 18617,
                  "name": "graham crackers",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/graham-crackers.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add sugar, salt and butter, and pulse until crumbs are moistened.  Crumbs should stick together when pinched.  If they don't stick, add water a teaspoon at a time until proper consistency is met.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/water.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Pour mixture into greased pie plate, and press down to evenly cover bottom and sides of pan.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Bake for 8 minutes.  Allow to cool completely before filling.In a large, clean bowl (or the bowl of a stand mixer) beat whipping cream until it begins to thicken (about 2 minutes but can be up to 5 minutes.)",
              "ingredients": [
                {
                  "id": 1001053,
                  "name": "whipping cream",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404665,
                  "name": "stand mixer",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stand-mixer.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Add sugar and vanilla, and beat until thick and creamy.  Set aside, or empty into another bowl if using stand mixer.)In a measuring cup, whisk together instant pudding and 1 cup of milk.  Set aside.In another bowl (or now-empty stand mixer bowl), beat cream cheese until light and fluffy.",
              "ingredients": [
                {
                  "id": 1017,
                  "name": "cream cheese",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
                },
                {
                  "id": 2050,
                  "name": "vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404766,
                  "name": "measuring cup",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/measuring-cup.jpg"
                },
                {
                  "id": 404665,
                  "name": "stand mixer",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stand-mixer.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Add vanilla pudding mixture and sweetened condensed milk, and beat until smooth and slightly thickened.Fold in half of the whipped cream mixture.  Reserve the remaining whipped cream for topping.",
              "ingredients": [
                {
                  "id": 1095,
                  "name": "sweetened condensed milk",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/evaporated-milk.png"
                },
                {
                  "id": 2050,
                  "name": "vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 7,
              "step": "Pour a small amount (about a cup or so) of filling into cooled crust.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Spread evenly over bottom.Slice bananas, and line bottom and sides of crust with sliced bananas.",
              "ingredients": [
                {
                  "id": 9040,
                  "name": "banana",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Pour remaining filling over banana slices.Top filling with remaining whipped cream.Refrigerate for at least one hour.  Cover with plastic wrap if necessary.Before serving, toast coconut flakes over medium heat in a non-stick skillet until golden brown.",
              "ingredients": [
                {
                  "id": 9040,
                  "name": "banana",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404730,
                  "name": "plastic wrap",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/plastic-wrap.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 10,
              "step": "Garnish pie with additional sliced bananas and toasted coconut.Enjoy!",
              "ingredients": [
                {
                  "id": 9040,
                  "name": "banana",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "creditsText": "Lemon Sugar"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 4,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 4,
      "preparationMinutes": 20,
      "cookingMinutes": 0,
      "sourceUrl": "http://www.neighborfoodblog.com/2014/05/cilantro-lime-chicken-salad.html",
      "spoonacularSourceUrl": "https://spoonacular.com/tex-mex-chicken-salad-stuffed-bell-peppers-479724",
      "aggregateLikes": 118,
      "spoonacularScore": 80,
      "healthScore": 17,
      "creditText": "Neighbor Food Blog",
      "sourceName": "Neighbor Food Blog",
      "pricePerServing": 134.04,
      "extendedIngredients": [
        {
          "id": 10211821,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png",
          "consistency": "solid",
          "name": "bell pepper",
          "amount": 1,
          "unit": "",
          "originalString": "1 bell pepper, diced",
          "metaInformation": [
            "diced"
          ]
        },
        {
          "id": 10211821,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png",
          "consistency": "solid",
          "name": "bell peppers",
          "amount": 4,
          "unit": "",
          "originalString": "4 mini bell peppers, sliced in half lengthwise (I used Baloian Farms)",
          "metaInformation": [
            "mini",
            "sliced in half lengthwise (i used baloian farms)"
          ]
        },
        {
          "id": 1025006,
          "aisle": "Meat",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg",
          "consistency": "solid",
          "name": "chicken",
          "amount": 2,
          "unit": "cups",
          "originalString": "2 cups chopped chicken",
          "metaInformation": [
            "chopped"
          ]
        },
        {
          "id": 2009,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
          "consistency": "solid",
          "name": "chili powder",
          "amount": 0.5,
          "unit": "teaspoon",
          "originalString": "½ teaspoon chili powder",
          "metaInformation": []
        },
        {
          "id": 11165,
          "aisle": "Produce;Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cilantro.png",
          "consistency": "solid",
          "name": "cilantro",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "¼ cup chopped cilantro",
          "metaInformation": [
            "chopped"
          ]
        },
        {
          "id": 1002014,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/ground-cumin.jpg",
          "consistency": "solid",
          "name": "cumin",
          "amount": 1,
          "unit": "teaspoon",
          "originalString": "1 teaspoon cumin",
          "metaInformation": []
        },
        {
          "id": 11979,
          "aisle": "Canned and Jarred;Produce;Ethnic Foods",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png",
          "consistency": "solid",
          "name": "jalapeno",
          "amount": 1,
          "unit": "",
          "originalString": "1 jalapeno, seeded and diced (or leave the seeds in for extra heat!)",
          "metaInformation": [
            "diced",
            "seeded",
            "for extra heat!)"
          ]
        },
        {
          "id": 9159,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/lime-wedge.jpg",
          "consistency": "solid",
          "name": "lime",
          "amount": 1,
          "unit": "tablespoon",
          "originalString": "tablespoon lime",
          "metaInformation": []
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.jpg",
          "consistency": "solid",
          "name": "onion",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "¼ cup to ½ cup diced red onion",
          "metaInformation": [
            "diced",
            "red"
          ]
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg",
          "consistency": "solid",
          "name": "salt and pepper",
          "amount": 4,
          "unit": "servings",
          "originalString": "Salt and pepper, to taste",
          "metaInformation": [
            "to taste"
          ]
        },
        {
          "id": 1056,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/sour-cream.jpg",
          "consistency": "solid",
          "name": "sour cream",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "¼ cup sour cream",
          "metaInformation": [
            "sour"
          ]
        }
      ],
      "id": 479724,
      "title": "Tex Mex Chicken Salad Stuffed Bell Peppers",
      "readyInMinutes": 20,
      "image": "https://spoonacular.com/recipeImages/479724-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [
        "southwest",
        "tex-mex",
        "southwestern"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "primal"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
      },
      "instructions": "In a large bowl, combine all the ingredients except the salt and pepper and halved bell peppers. Stir well until everything is evenly distributed. Taste. Season with salt and pepper to taste.Scoop the mixture into the halved bell peppers, mounding it on top. Sprinkle with extra cilantro, if desired. Serve immediately or cover and refrigerate until ready to serve.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large bowl, combine all the ingredients except the salt and pepper and halved bell peppers. Stir well until everything is evenly distributed. Taste. Season with salt and pepper to taste.Scoop the mixture into the halved bell peppers, mounding it on top. Sprinkle with extra cilantro, if desired.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                  "id": 10211821,
                  "name": "bell pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png"
                },
                {
                  "id": 11165,
                  "name": "cilantro",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cilantro.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Serve immediately or cover and refrigerate until ready to serve.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "creditsText": "Neighbor Food Blog"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 46,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 4,
      "preparationMinutes": 30,
      "cookingMinutes": 15,
      "sourceUrl": "http://www.couponclippingcook.com/bourbon-glazed-bananas-and-streusel-dessert/",
      "spoonacularSourceUrl": "https://spoonacular.com/bourbon-glazed-bananas-and-streusel-dessert-615228",
      "aggregateLikes": 100,
      "spoonacularScore": 55,
      "healthScore": 7,
      "creditText": "Cuopon Clipping Cook",
      "sourceName": "Cuopon Clipping Cook",
      "pricePerServing": 478.05,
      "extendedIngredients": [
        {
          "id": 9040,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
          "consistency": "solid",
          "name": "bananas",
          "amount": 4,
          "unit": "",
          "originalString": "4 bananas, medium to large size, peeled and cut into thick slices width-wise",
          "metaInformation": [
            "medium to large",
            "thick",
            "peeled",
            "cut into  slices width-wise"
          ]
        },
        {
          "id": 10014037,
          "aisle": "Alcoholic Beverages",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/bourbon.jpg",
          "consistency": "liquid",
          "name": "bourbon",
          "amount": 1,
          "unit": "cup",
          "originalString": "1 cup Bourbon",
          "metaInformation": []
        },
        {
          "id": 10014037,
          "aisle": "Alcoholic Beverages",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/bourbon.jpg",
          "consistency": "liquid",
          "name": "bourbon",
          "amount": 4,
          "unit": "servings",
          "originalString": "Bourbon glazed bananas",
          "metaInformation": []
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-sugar-dark.jpg",
          "consistency": "solid",
          "name": "brown sugar",
          "amount": 0.5,
          "unit": "cup",
          "originalString": "½ cup brown sugar",
          "metaInformation": []
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
          "consistency": "solid",
          "name": "butter",
          "amount": 4,
          "unit": "tablespoons",
          "originalString": "4 tablespoons butter",
          "metaInformation": []
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png",
          "consistency": "solid",
          "name": "flour",
          "amount": 0.75,
          "unit": "cup",
          "originalString": "¾ cup flour",
          "metaInformation": []
        },
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          "consistency": "solid",
          "name": "ground cinnamon",
          "amount": 3,
          "unit": "pinches",
          "originalString": "3 pinches ground cinnamon",
          "metaInformation": []
        },
        {
          "id": 19911,
          "aisle": "Cereal",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/maple-syrup-or-agave-nectar.jpg",
          "consistency": "liquid",
          "name": "maple syrup",
          "amount": 0.5,
          "unit": "cup",
          "originalString": "½ cup maple syrup",
          "metaInformation": []
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "amount": 4,
          "unit": "dashes",
          "originalString": "4 dashes salt",
          "metaInformation": []
        },
        {
          "id": 19095,
          "aisle": "Frozen",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-ice-cream.png",
          "consistency": "liquid",
          "name": "vanilla ice cream",
          "amount": 12,
          "unit": "scoops",
          "originalString": "12 scoops vanilla ice cream",
          "metaInformation": []
        },
        {
          "id": 12155,
          "aisle": "Nuts;Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/walnuts.jpg",
          "consistency": "solid",
          "name": "walnuts",
          "amount": 2,
          "unit": "tablespoons",
          "originalString": "2 tablespoons walnuts, finely chopped",
          "metaInformation": [
            "finely chopped"
          ]
        }
      ],
      "id": 615228,
      "title": "Bourbon Glazed Bananas and Streusel Dessert",
      "readyInMinutes": 45,
      "image": "https://spoonacular.com/recipeImages/615228-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [],
      "dishTypes": [],
      "diets": [],
      "occasions": [],
      "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
      },
      "instructions": "For the Streusel:Preheat the oven to 350 degrees F.  In a small to medium size bowl, add all of the ingredients.  Using a fork, lightly mash the ingredients into the butter.  Then stir together.  Lay out the ingredients on to a cookie sheet and bake in the oven until the streusel starts to lightly brown (about 8 minutes).  Remove from the oven and let cool.For the Bourbon Glazed Bananas:Heat a large skillet on medium heat and add the butter.  Stir until the butter melts and starts to turn a light golden color.  Add the maple syrup and stir.  Add the Bourbon and stir.  When the mixture starts to reduce add the bananas.  Let cook until the mixture thickens a bit (about 5 minutes).  Remove from the heat and set aside.For the Dessert:Add 3 scoops of ice cream to each serving dish.  Top with some of the baked streusel.  Spoon the glazed bananas over the ice cream.  Top with more baked streusel and serve.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "For the Streusel:Preheat the oven to 350 degrees F.  In a small to medium size bowl, add all of the ingredients.  Using a fork, lightly mash the ingredients into the butter.  Then stir together.  Lay out the ingredients on to a cookie sheet and bake in the oven until the streusel starts to lightly brown (about 8 minutes).",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350,
                    "unit": "Fahrenheit"
                  }
                }
              ],
              "length": {
                "number": 8,
                "unit": "minutes"
              }
            }
          ]
        },
        {
          "name": "Remove from the heat and set aside.For the Dessert",
          "steps": [
            {
              "number": 1,
              "step": "Add 3 scoops of ice cream to each serving dish.  Top with some of the baked streusel.  Spoon the glazed bananas over the ice cream.  Top with more baked streusel and serve.",
              "ingredients": [
                {
                  "id": 19095,
                  "name": "ice cream",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-ice-cream.png"
                },
                {
                  "id": 9040,
                  "name": "banana",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                }
              ],
              "equipment": []
            }
          ]
        },
        {
          "name": "Remove from the oven and let cool.For the Bourbon Glazed Bananas",
          "steps": [
            {
              "number": 1,
              "step": "Heat a large skillet on medium heat and add the butter.  Stir until the butter melts and starts to turn a light golden color.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add the maple syrup and stir.",
              "ingredients": [
                {
                  "id": 19911,
                  "name": "maple syrup",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/maple-syrup-or-agave-nectar.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Add the Bourbon and stir.  When the mixture starts to reduce add the bananas.",
              "ingredients": [
                {
                  "id": 9040,
                  "name": "banana",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                  "id": 10014037,
                  "name": "bourbon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/bourbon.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Let cook until the mixture thickens a bit (about 5 minutes).",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "creditsText": "Cuopon Clipping Cook"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": true,
      "sustainable": false,
      "weightWatcherSmartPoints": 18,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 16,
      "preparationMinutes": 20,
      "cookingMinutes": 20,
      "sourceUrl": "http://www.jocooks.com/bakery/pastries/lemon-blueberry-scones/",
      "spoonacularSourceUrl": "https://spoonacular.com/lemon-blueberry-scones-559290",
      "aggregateLikes": 1602,
      "spoonacularScore": 36,
      "healthScore": 2,
      "creditText": "Jo Cooks",
      "sourceName": "Jo Cooks",
      "pricePerServing": 62.54,
      "extendedIngredients": [
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png",
          "consistency": "solid",
          "name": "all purpose flour",
          "amount": 4,
          "unit": "cups",
          "originalString": "4 cups all purpose flour",
          "metaInformation": []
        },
        {
          "id": 18371,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
          "consistency": "solid",
          "name": "baking powder",
          "amount": 2,
          "unit": "tbsp",
          "originalString": "2 tbsp baking powder",
          "metaInformation": []
        },
        {
          "id": 9050,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg",
          "consistency": "solid",
          "name": "blueberries",
          "amount": 2,
          "unit": "cups",
          "originalString": "2 cups fresh blueberries",
          "metaInformation": [
            "fresh"
          ]
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
          "consistency": "solid",
          "name": "butter",
          "amount": 1.5,
          "unit": "cup",
          "originalString": "1½ cup cold butter, cut into cubes",
          "metaInformation": [
            "cold",
            "cut into cubes"
          ]
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg",
          "consistency": "solid",
          "name": "egg",
          "amount": 1,
          "unit": "",
          "originalString": "1 egg for egg wash",
          "metaInformation": [
            "for egg wash"
          ]
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg",
          "consistency": "solid",
          "name": "eggs",
          "amount": 4,
          "unit": "",
          "originalString": "4 eggs (lightly beaten)",
          "metaInformation": [
            "lightly beaten",
            "()"
          ]
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg",
          "consistency": "liquid",
          "name": "juice of lemon",
          "amount": 2,
          "unit": "",
          "originalString": "juice from ½ a lemon (about 2 tablespoons)",
          "metaInformation": []
        },
        {
          "id": 9156,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg",
          "consistency": "solid",
          "name": "lemon zest",
          "amount": 16,
          "unit": "servings",
          "originalString": "zest from one lemon",
          "metaInformation": []
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg",
          "consistency": "liquid",
          "name": "milk",
          "amount": 6,
          "unit": "tbsp",
          "originalString": "6 tbsp milk",
          "metaInformation": []
        },
        {
          "id": 19336,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/powdered-sugar.jpg",
          "consistency": "solid",
          "name": "powdered sugar",
          "amount": 3,
          "unit": "cups",
          "originalString": "3 cups powdered sugar",
          "metaInformation": []
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "amount": 1,
          "unit": "tsp",
          "originalString": "1 tsp salt",
          "metaInformation": []
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png",
          "consistency": "solid",
          "name": "sugar",
          "amount": 0.5,
          "unit": "cup",
          "originalString": "½ cup sugar",
          "metaInformation": []
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg",
          "consistency": "liquid",
          "name": "vanilla extract",
          "amount": 2,
          "unit": "tsp",
          "originalString": "2 tsp vanilla extract",
          "metaInformation": []
        }
      ],
      "id": 559290,
      "title": "Lemon Blueberry Scones",
      "readyInMinutes": 40,
      "image": "https://spoonacular.com/recipeImages/559290-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [
        "european",
        "english",
        "british",
        "scottish"
      ],
      "dishTypes": [
        "morning meal",
        "dessert",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "cream sherry",
          "moscato dasti",
          "port"
        ],
        "pairingText": "Cream Sherry, Moscato d'Asti, and Port are great choices for Scone. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port.",
        "productMatches": []
      },
      "instructions": "Preheat oven to 400 degrees F.In a large mixing bowl, stir together the first 5 ingredients, including the butter. In a small bowl, whisk together the milk, eggs, vanilla extract, and lemon zest.Cut the butter into the dry ingredients until the size of large peas, using a pastry blender. Stir in the wet ingredients, and mix until just combined. Gently fold in the blueberries.Transfer the dough to a lightly floured surface. Gently roll out the dough into a disc, taking care not to burst the blueberries. Fold the dough over itself and repeat 4-5 times. Depending on the shape you want your scones, roll out your dough into an 1-inch thick disc or rectangle. Cut the dough into wedges (if shaped into a disc), or squares (if shaped into a rectangle), or cut out with a biscuit cutter. Transfer scones to a baking sheet and brush with egg wash. If preferred sprinkle with additional sugar.Bake for 15-18 minutes, or until the scones are golden brown and do not fall apart when nudged. Immediately transfer from pan to cooling racks.Meanwhile, in a medium bowl, mix together the powdered sugar, milk, 1 teaspoon vanilla, and lemon juice. Stir until the mixture is smooth and runny. If too thick add more milk; if too thin add more powdered sugar.While scones are still warm, drizzle a tablespoon of glaze over each. Allow scones to stand for a few minutes until the glaze forms a crust.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 400 degrees F.In a large mixing bowl, stir together the first 5 ingredients, including the butter. In a small bowl, whisk together the milk, eggs, vanilla extract, and lemon zest.",
              "ingredients": [
                {
                  "id": 2050,
                  "name": "vanilla extract",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
                },
                {
                  "id": 9156,
                  "name": "lemon zest",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 400,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Cut the butter into the dry ingredients until the size of large peas, using a pastry blender. Stir in the wet ingredients, and mix until just combined. Gently fold in the blueberries.",
              "ingredients": [
                {
                  "id": 9050,
                  "name": "blueberries",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404726,
                  "name": "blender",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/blender.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "Transfer the dough to a lightly floured surface. Gently roll out the dough into a disc, taking care not to burst the blueberries. Fold the dough over itself and repeat 4-5 times. Depending on the shape you want your scones, roll out your dough into an 1-inch thick disc or rectangle.",
              "ingredients": [
                {
                  "id": 9050,
                  "name": "blueberries",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Cut the dough into wedges (if shaped into a disc), or squares (if shaped into a rectangle), or cut out with a biscuit cutter.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Transfer scones to a baking sheet and brush with egg wash. If preferred sprinkle with additional sugar.",
              "ingredients": [
                {
                  "id": 19335,
                  "name": "sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Bake for 15-18 minutes, or until the scones are golden brown and do not fall apart when nudged. Immediately transfer from pan to cooling racks.Meanwhile, in a medium bowl, mix together the powdered sugar, milk, 1 teaspoon vanilla, and lemon juice. Stir until the mixture is smooth and runny. If too thick add more milk; if too thin add more powdered sugar.While scones are still warm, drizzle a tablespoon of glaze over each. Allow scones to stand for a few minutes until the glaze forms a crust.",
              "ingredients": [
                {
                  "id": 19336,
                  "name": "powdered sugar",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/powdered-sugar.jpg"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
                },
                {
                  "id": 2050,
                  "name": "vanilla",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 18,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "creditsText": "Jo Cooks"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": true,
      "sustainable": false,
      "weightWatcherSmartPoints": 8,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 8,
      "preparationMinutes": 10,
      "cookingMinutes": 35,
      "sourceUrl": "http://www.foodnetwork.com/recipes/food-network-kitchens/cheesy-bacon-tater-tot-pie.html",
      "spoonacularSourceUrl": "https://spoonacular.com/cheesy-bacon-tater-tot-pie-737078",
      "aggregateLikes": 2100,
      "spoonacularScore": 29,
      "healthScore": 1,
      "creditText": "Foodnetwork",
      "sourceName": "Foodnetwork",
      "pricePerServing": 63.15,
      "extendedIngredients": [
        {
          "id": 10123,
          "aisle": "Meat",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png",
          "consistency": "solid",
          "name": "bacon",
          "amount": 4,
          "unit": "slices",
          "originalString": "4 slices bacon",
          "metaInformation": []
        },
        {
          "id": 11156,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-chives.jpg",
          "consistency": "solid",
          "name": "fresh chives",
          "amount": 8,
          "unit": "servings",
          "originalString": "Chopped fresh chives, for topping",
          "metaInformation": [
            "fresh",
            "chopped",
            "for topping"
          ]
        },
        {
          "id": 4025,
          "aisle": "Condiments",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png",
          "consistency": "liquid",
          "name": "mayonnaise",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "1/4 cup mayonnaise",
          "metaInformation": []
        },
        {
          "id": 1001009,
          "aisle": "Cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheese-cheddar.png",
          "consistency": "solid",
          "name": "shredded cheddar cheese",
          "amount": 4,
          "unit": "ounces",
          "originalString": "1 cup shredded cheddar cheese (about 4 ounces)",
          "metaInformation": [
            "shredded"
          ]
        },
        {
          "id": 1056,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/sour-cream.jpg",
          "consistency": "solid",
          "name": "sour cream",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "1/4 cup sour cream",
          "metaInformation": [
            "sour"
          ]
        },
        {
          "id": 1016168,
          "aisle": "Condiments",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png",
          "consistency": "liquid",
          "name": "sriracha",
          "amount": 2,
          "unit": "tablespoons",
          "originalString": "2 tablespoons Sriracha",
          "metaInformation": []
        },
        {
          "id": 11398,
          "aisle": "Frozen",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/tater-tots.jpg",
          "consistency": "solid",
          "name": "tater tots",
          "amount": 3,
          "unit": "cups",
          "originalString": "1 pound (about 3 cups) frozen Tater Tots",
          "metaInformation": [
            "frozen"
          ]
        }
      ],
      "id": 737078,
      "title": "Cheesy Bacon-Tater Tot Pie",
      "readyInMinutes": 45,
      "image": "https://spoonacular.com/recipeImages/737078-556x370.jpeg",
      "imageType": "jpeg",
      "cuisines": [],
      "dishTypes": [],
      "diets": [
        "gluten free"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "lambrusco dolce",
          "late harvest riesling",
          "vin santo"
        ],
        "pairingText": "Lambrusco Dolce, Late Harvest Riesling, and Vin Santo are great choices for Pie. These wines are all sweet, which is important since wine should usually be sweeter than the food you're pairing with it.",
        "productMatches": []
      },
      "instructions": "Bake the Tater Tots as the label directs. Reduce the oven temperature to 400 degrees F and lightly coat a 9-inch pie plate with cooking spray.                          Cook the bacon in a medium skillet over medium-low heat, turning once, until crisp, about 8 minutes. Remove to a paper towel-lined plate to drain, then roughly chop.                          Lightly press the Tater Tots into the prepared dish. Top with the cheese and bacon. Bake until the cheese melts, about 5 minutes.                          Meanwhile, combine the sour cream and mayonnaise with the Sriracha. Drizzle the pie with the spicy mayonnaise and sprinkle with chives.                          Photograph by Mark Weinberg",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Bake the Tater Tots as the label directs. Reduce the oven temperature to 400 degrees F and lightly coat a 9-inch pie plate with cooking spray.",
              "ingredients": [
                {
                  "id": 11398,
                  "name": "tater tots",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tater-tots.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 400,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Cook the bacon in a medium skillet over medium-low heat, turning once, until crisp, about 8 minutes.",
              "ingredients": [
                {
                  "id": 10123,
                  "name": "bacon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 8,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Remove to a paper towel-lined plate to drain, then roughly chop.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405895,
                  "name": "paper towels",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/paper-towels.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Lightly press the Tater Tots into the prepared dish. Top with the cheese and bacon.",
              "ingredients": [
                {
                  "id": 11398,
                  "name": "tater tots",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tater-tots.jpg"
                },
                {
                  "id": 1041009,
                  "name": "cheese",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.jpg"
                },
                {
                  "id": 10123,
                  "name": "bacon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Bake until the cheese melts, about 5 minutes.",
              "ingredients": [
                {
                  "id": 1041009,
                  "name": "cheese",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Meanwhile, combine the sour cream and mayonnaise with the Sriracha.",
              "ingredients": [
                {
                  "id": 4025,
                  "name": "mayonnaise",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png"
                },
                {
                  "id": 1056,
                  "name": "sour cream",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/sour-cream.jpg"
                },
                {
                  "id": 1016168,
                  "name": "sriracha",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 7,
              "step": "Drizzle the pie with the spicy mayonnaise and sprinkle with chives.",
              "ingredients": [
                {
                  "id": 4025,
                  "name": "mayonnaise",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png"
                },
                {
                  "id": 11156,
                  "name": "chives",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-chives.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Photograph by Mark Weinberg",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "creditsText": "Foodnetwork"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 4,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": true,
      "servings": 1,
      "preparationMinutes": 5,
      "cookingMinutes": 0,
      "sourceUrl": "http://www.hummusapien.com/peachy-coconut-kale-smoothie/",
      "spoonacularSourceUrl": "https://spoonacular.com/peachy-pineapple-kale-smoothie-609705",
      "aggregateLikes": 28,
      "spoonacularScore": 98,
      "healthScore": 69,
      "creditText": "Hummusapien",
      "sourceName": "Hummusapien",
      "pricePerServing": 387.77,
      "extendedIngredients": [
        {
          "id": 12119,
          "aisle": "Beverages",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/coconut-water.jpg",
          "consistency": "solid",
          "name": "coconut water",
          "amount": 1.25,
          "unit": "cups",
          "originalString": "1¼ cups coconut water",
          "metaInformation": []
        },
        {
          "id": 93602,
          "aisle": "Health Foods",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/shelled-hemp-seeds.png",
          "consistency": "solid",
          "name": "hemp seeds",
          "amount": 1,
          "unit": "tbsp",
          "originalString": "1 tbsp hemp seeds",
          "metaInformation": []
        },
        {
          "id": 11233,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/kale.jpg",
          "consistency": "solid",
          "name": "kale",
          "amount": 1,
          "unit": "leaf",
          "originalString": "1 small leaf of de-stemmed kale (about ½ cup, packed)",
          "metaInformation": [
            "packed",
            "small",
            "( ½ cup, )"
          ]
        },
        {
          "id": 9236,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/peaches.jpg",
          "consistency": "solid",
          "name": "peaches",
          "amount": 1,
          "unit": "cup",
          "originalString": "1 cup sliced frozen peaches",
          "metaInformation": [
            "frozen",
            "sliced"
          ]
        },
        {
          "id": 1029354,
          "aisle": "Canned and Jarred",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/pineapple-with-can.png",
          "consistency": "liquid",
          "name": "pineapple chunks",
          "amount": 0.5,
          "unit": "cup",
          "originalString": "½ cup frozen pineapple chunks",
          "metaInformation": [
            "frozen"
          ]
        }
      ],
      "id": 609705,
      "title": "Peachy Pineapple Kale Smoothie",
      "readyInMinutes": 5,
      "image": "https://spoonacular.com/recipeImages/609705-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [],
      "dishTypes": [
        "morning meal",
        "brunch",
        "beverage",
        "breakfast",
        "drink"
      ],
      "diets": [
        "caveman",
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "primal",
        "whole 30",
        "vegan"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
      },
      "instructions": "Place all ingredients in a blender and blend until smooth.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Place all ingredients in a blender and blend until smooth.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404726,
                  "name": "blender",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/blender.png"
                }
              ]
            }
          ]
        }
      ],
      "creditsText": "Hummusapien"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 16,
      "gaps": "no",
      "lowFodmap": true,
      "ketogenic": true,
      "whole30": false,
      "servings": 4,
      "sourceUrl": "http://www.seriouseats.com/recipes/2012/08/marinated-mozzarella-cherry-tomato-basil-salad-recipe.html",
      "spoonacularSourceUrl": "https://spoonacular.com/marinated-mozzarella-cherry-tomato-and-basil-salad-200209",
      "aggregateLikes": 190,
      "spoonacularScore": 70,
      "healthScore": 12,
      "creditText": "Serious Eats",
      "sourceName": "Serious Eats",
      "pricePerServing": 307.45,
      "extendedIngredients": [
        {
          "id": 2044,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/basil.jpg",
          "consistency": "solid",
          "name": "basil",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "1/4 cup freshly chopped basil",
          "metaInformation": [
            "chopped"
          ]
        },
        {
          "id": 1034053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
          "consistency": "liquid",
          "name": "extra virgin olive oil",
          "amount": 0.25,
          "unit": "cup",
          "originalString": "1/4 cup extra virgin olive oil",
          "metaInformation": []
        },
        {
          "id": 10111529,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cherry-tomatoes.jpg",
          "consistency": "solid",
          "name": "grape tomatoes",
          "amount": 2,
          "unit": "cups",
          "originalString": "1 pint cherry or grape tomatoes (about 2 cups)",
          "metaInformation": []
        },
        {
          "id": 1082047,
          "aisle": "Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
          "consistency": "solid",
          "name": "kosher salt",
          "amount": 4,
          "unit": "servings",
          "originalString": "Kosher salt and freshly ground black pepper, to taste",
          "metaInformation": [
            "black",
            "freshly ground",
            "to taste"
          ]
        },
        {
          "id": 1026,
          "aisle": "Cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/mozzarella-fresh.jpg",
          "consistency": "solid",
          "name": "mozzarella",
          "amount": 1,
          "unit": "pound",
          "originalString": "1 pound ciliegine mozzarella (cherry-size mozzarella balls)",
          "metaInformation": [
            "(cherry-size mozzarella balls)"
          ]
        },
        {
          "id": 1012069,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/vinegar-(white).jpg",
          "consistency": "liquid",
          "name": "white balsamic vinegar",
          "amount": 3,
          "unit": "tablespoons",
          "originalString": "3 tablespoons balsamic vinegar (regular, white, or golden)",
          "metaInformation": [
            "white",
            "(regular, , or golden)"
          ]
        }
      ],
      "id": 200209,
      "title": "Marinated Mozzarella, Cherry Tomato, and Basil Salad",
      "readyInMinutes": 45,
      "image": "https://spoonacular.com/recipeImages/200209-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [],
      "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "salad",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian",
        "primal",
        "fodmap friendly",
        "ketogenic"
      ],
      "occasions": [],
      "winePairing": {
        "pairedWines": [
          "chardonnay",
          "gruener veltliner",
          "sauvignon blanc"
        ],
        "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Salad. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings.",
        "productMatches": []
      },
      "instructions": "Procedures                                                                              1                                                                            Combine the oil and basil in a bowl. Add the mozzarella and season to taste with salt and pepper. Cover and let marinate for at least 30 minutes in the refrigerator.                                                                                                                             2                                                                            Add tomatoes and vinegar to the mozzarella and toss to combine. Season to taste with more salt and pepper if desired, and serve immediately",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "1",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Combine the oil and basil in a bowl.",
              "ingredients": [
                {
                  "id": 2044,
                  "name": "basil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/basil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Add the mozzarella and season to taste with salt and pepper. Cover and let marinate for at least 30 minutes in the refrigerator.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                  "id": 1026,
                  "name": "mozzarella",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mozzarella-fresh.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "2",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Add tomatoes and vinegar to the mozzarella and toss to combine. Season to taste with more salt and pepper if desired, and serve immediately",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                  "id": 1026,
                  "name": "mozzarella",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mozzarella-fresh.jpg"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "creditsText": "Serious Eats"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": true,
      "sustainable": false,
      "weightWatcherSmartPoints": 5,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 6,
      "preparationMinutes": 10,
      "cookingMinutes": 420,
      "sourceUrl": "http://www.garnishwithlemon.com/slow-cooker-chicken-taco-soup/",
      "spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-chicken-taco-soup-678058",
      "aggregateLikes": 1910,
      "spoonacularScore": 74,
      "healthScore": 11,
      "creditText": "Garnish with Lemon",
      "sourceName": "Garnish with Lemon",
      "pricePerServing": 168.67,
      "extendedIngredients": [
        {
          "id": 14006,
          "aisle": "Alcoholic Beverages",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/beer.jpg",
          "consistency": "liquid",
          "name": "beer",
          "amount": 12,
          "unit": "ounce",
          "originalString": "1 (12-ounce) bottle beer",
          "metaInformation": []
        },
        {
          "id": 11531,
          "aisle": "Canned and Jarred",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.jpg",
          "consistency": "solid",
          "name": "canned diced tomatoes",
          "amount": 20,
          "unit": "ounce",
          "originalString": "2 (10-ounce) cans diced tomatoes with green chilies, undrained",
          "metaInformation": [
            "diced",
            "with green chilies, undrained",
            "canned"
          ]
        },
        {
          "id": 11549,
          "aisle": "Canned and Jarred",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
          "consistency": "solid",
          "name": "canned tomato sauce",
          "amount": 8,
          "unit": "ounce",
          "originalString": "1 (8-ounce) can tomato sauce",
          "metaInformation": [
            "canned"
          ]
        },
        {
          "id": 6194,
          "aisle": "Canned and Jarred",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png",
          "consistency": "liquid",
          "name": "chicken broth",
          "amount": 0.5,
          "unit": "cup",
          "originalString": "½ cup chicken broth",
          "metaInformation": []
        },
        {
          "id": 11913,
          "aisle": "Frozen",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/corn.png",
          "consistency": "solid",
          "name": "frozen corn",
          "amount": 2,
          "unit": "cups",
          "originalString": "2 cups frozen corn",
          "metaInformation": [
            "frozen"
          ]
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.jpg",
          "consistency": "solid",
          "name": "onion",
          "amount": 1,
          "unit": "",
          "originalString": "1 small onion, chopped",
          "metaInformation": [
            "small",
            "chopped"
          ]
        },
        {
          "id": 16202,
          "aisle": "Canned and Jarred;Ethnic Foods",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/refried-beans.png",
          "consistency": "solid",
          "name": "refried beans",
          "amount": 15,
          "unit": "ounce",
          "originalString": "1 (15-ounce) can refried black beans",
          "metaInformation": [
            "black",
            "canned"
          ]
        },
        {
          "id": 1055062,
          "aisle": "Meat",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png",
          "consistency": "solid",
          "name": "skinless boneless chicken breasts",
          "amount": 3,
          "unit": "",
          "originalString": "3 whole skinless, boneless chicken breasts",
          "metaInformation": [
            "whole",
            "boneless",
            "skinless"
          ]
        },
        {
          "id": 2073,
          "aisle": "Ethnic Foods;Spices and Seasonings",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
          "consistency": "solid",
          "name": "taco seasoning",
          "amount": 4,
          "unit": "tablespoons",
          "originalString": "4 tablespoons taco seasoning",
          "metaInformation": []
        }
      ],
      "id": 678058,
      "title": "Slow Cooker Chicken Taco Soup",
      "readyInMinutes": 430,
      "image": "https://spoonacular.com/recipeImages/678058-556x370.jpg",
      "imageType": "jpg",
      "cuisines": [
        "mexican"
      ],
      "dishTypes": [
        "lunch",
        "soup",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free"
      ],
      "occasions": [
        "fall",
        "winter"
      ],
      "winePairing": {
        "pairedWines": [
          "pinot noir",
          "riesling",
          "sparkling rose"
        ],
        "pairingText": "Pinot Noir, Riesling, and Sparkling rosé are my top picks for Mexican. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling rosé is a safe pairing too.",
        "productMatches": []
      },
      "instructions": "Place the onion, black beans, corn, tomato sauce, beer, diced tomatoes, and chicken broth in a slow cooker. Add taco seasoning, and stir to blend.Lay chicken breasts on top of the mixture, pressing down slightly until just covered by the other ingredients. Set slow cooker for low heat, cover and cook for 5 hours.Remove chicken breasts from the soup and shred. Stir the shredded chicken back into the soup, and continue cooking for 2 hours.Garnish with shredded Cheddar cheese, a dollop of sour cream, cilantro and avocado, if desired.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Place the onion, black beans, corn, tomato sauce, beer, diced tomatoes, and chicken broth in a slow cooker.",
              "ingredients": [
                {
                  "id": 6194,
                  "name": "chicken broth",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
                },
                {
                  "id": 11549,
                  "name": "tomato sauce",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404718,
                  "name": "slow cooker",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add taco seasoning, and stir to blend.Lay chicken breasts on top of the mixture, pressing down slightly until just covered by the other ingredients. Set slow cooker for low heat, cover and cook for 5 hours.",
              "ingredients": [
                {
                  "id": 5062,
                  "name": "chicken breast",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"
                },
                {
                  "id": 2073,
                  "name": "taco seasoning mix",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404718,
                  "name": "slow cooker",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Remove chicken breasts from the soup and shred. Stir the shredded chicken back into the soup, and continue cooking for 2 hours.",
              "ingredients": [
                {
                  "id": 5062,
                  "name": "chicken breast",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Garnish with shredded Cheddar cheese, a dollop of sour cream, cilantro and avocado, if desired.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "creditsText": "Garnish with Lemon"
    }
  ]
