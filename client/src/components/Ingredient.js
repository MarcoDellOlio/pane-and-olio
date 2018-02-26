import React, { Component } from 'react'
import { Img, Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class Ingredient extends Component {


    isPresent = (trueOrFalse) => {
        const recipeId = this.props.recipeId
        const userId = localStorage.userId
        const ingredient = {
            name: this.props.name,
            ingredientId: this.props.id,
            present : trueOrFalse
        }
        console.log(recipeId)
        axios.post(`/api/users/${userId}/recipes/${recipeId}` , ingredient)
        .then(res => console.log(res))
        .catch((error) => { console.log(error) })
    }

    

    render() {

        const ingredient = this.props
        

        return (
           <IngredientWrapper>
                <div>{ingredient.originalString} </div>
                <CheckButton onClick={() => this.isPresent(true)} >ok</CheckButton>
                <CheckButton onClick={() => this.isPresent(false)} >no</CheckButton>
                <div>buy</div>
           </IngredientWrapper>


        )
    }
  }
  
  export default Ingredient;

  const IngredientWrapper = Wrapper.extend`
   flex-direction : row;
  `

  const CheckButton = styled.div`
  
  `