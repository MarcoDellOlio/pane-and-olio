import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import Ingredient from './Ingredient'





class IngredientsView extends Component {


    render() {

        const recipeId = this.props.recipeId

        const ingredientsList = () => {
           if (this.props.ingredients) {
               return this.props.ingredients.map((ingredient, index) => {
                return (
                    <Ingredient key={index} {...ingredient} recipeId={recipeId}/>
                )
            })
           }
        }

        return (
           <IngredientWrapper>
               {ingredientsList()}
           </IngredientWrapper>
        )
    }
  }
  
  export default IngredientsView;

  const IngredientWrapper = Wrapper.extend`
    padding : 2vh 0;
    height : auto;
  `