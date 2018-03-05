import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import Ingredient from './Ingredient'
import styled from 'styled-components'






class IngredientsView extends Component {


    render() {

        const recipeId = this.props.recipeId

        const ingredientsList = () => {
           if (this.props.ingredients) {
               return this.props.ingredients.map((ingredient, index) => {
                return (
                    <Ingredient 
                        key={index} 
                        {...ingredient}
                        recipeId={recipeId}
                        getNumberOfItemsInCart={this.props.getNumberOfItemsInCart}
                        />
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

  const IngredientWrapper = styled.div`
    padding : 2vh 0;
    height : auto;
  `