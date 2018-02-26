import React, { Component } from 'react'
import { Img, Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class Ingredient extends Component {

    isPresent = () => {
        axios.post()
    }

    render() {

        const ingredient = this.props
        

        return (
           <IngredientWrapper>
                <div>{ingredient.originalString} </div>
                <CheckButton>ok</CheckButton>
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