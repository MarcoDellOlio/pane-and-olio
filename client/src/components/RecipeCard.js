import React, { Component } from 'react'
import { Img} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class RecipeCard extends Component {

    saveRecipe = () => {
      const recipeId = this.props.id
      const name = this.props.title
      const userId = localStorage.userId
      const newRecipe = {recipeId, name}

      axios.post(`api/users/${userId}/recipes`, newRecipe)
      .then(res => console.log(res))
      .catch((error) => { console.log(error) })

    }

    render() {
        const recipe = this.props
        const loggedIn = localStorage.id_token
        return (
            <CardContainer>
                <UpperBand>           
                  <div>{recipe.title}</div>
                  {loggedIn? <div onClick={this.saveRecipe}>save</div> : null }
                </UpperBand>
                <RecipeImage> 
                     <Img  src={recipe.image} alt=""/>
                 </RecipeImage>
            </CardContainer>

        )
    }
  }
  
  export default RecipeCard;

  const CardContainer = styled.div`
    width : 48%;
    height : 30%;
    display : flex;
    flex-direction : column;
    background-color : ghostwhite;
    border-radius: 2px
    background-color: #f6f7f9;
    border-bottom: 1px solid #dddfe2;
  `

  const UpperBand = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    align-items : center;
  `

  const RecipeImage = styled.div`
    width : 100%;
    height : auto;
  `