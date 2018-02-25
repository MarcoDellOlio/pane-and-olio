import React, { Component } from 'react'
import { Img, Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class IngredientsView extends Component {

    render() {

       const ingredientsList = () => {
           if (this.props.ingredients) {
               return this.props.ingredients.map((ingredient, index) => {
                return (
                    <div key={index}>
                        <div>{ingredient.originalString} </div>
                    </div>
                )
            })
           }
       }


   

        return (
           <Wrapper>
               {ingredientsList()}
           </Wrapper>


        )
    }
  }
  
  export default IngredientsView;
