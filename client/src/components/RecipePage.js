import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import IngredientsView from './IngredientsView'
import PreparationView from './PreparationView'
import axios from 'axios'
import styled from 'styled-components'




class RecipePage extends Component {

    state = {
        recipe : {},
        savedRecipeId : "",
        ingredientsOrPreparation : "ingredients"
    }

    getRecipeInfo = () => {
        const recipeId = this.props.match.params.recipeId

        axios({
            method: 'get',
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${recipeId}/information?includeNutrition=false`,
            headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
          })
        .then((res) => { this.setState({recipe : res.data}) })
    }

    getSavedRecipeId = () => {
        const recipeId = this.props.match.params.recipeId
        const userId = localStorage.userId
        axios.get(`/api/users/${userId}/recipes`)
        .then((res) => {
            return res.data.filter((recipe) => 
            {return recipe.recipeId === recipeId.toString()})
        })
        .then((savedRecipe) => {
            this.setState({savedRecipeId : savedRecipe[0]._id})
        })
        .catch((error) => { console.log(error) })
    }

    showIngredients = () => {
        this.setState({ingredientsOrPreparation : "ingredients"})
    }
    
    showPreparation = () => {
        this.setState({ingredientsOrPreparation : "preparation"})
    }
    
    componentWillMount() {
        this.getRecipeInfo()
        this.getSavedRecipeId()
    }

    render() {

        const recipe = this.state.recipe
        const savedRecipeId = this.state.savedRecipeId
        const ingredients = this.state.recipe.extendedIngredients
        const instructions = this.state.recipe.analyzedInstructions

        return (
            
            <RecipeWrapper>
                <RecipeCardContainer>
                    <RecipeTitle>{recipe.title}</RecipeTitle>

                    <RecipeContent>
                        <RecipeMenu>
                            <div onClick={() => this.showIngredients()}>Ingredients</div>
                            <div onClick={() => this.showPreparation()}>Preparation</div>
                        </RecipeMenu>
                        {
                            this.state.ingredientsOrPreparation === "ingredients"?
                            <IngredientsView ingredients={ingredients} recipeId={savedRecipeId}/>
                            :
                            <PreparationView instructions={instructions} recipeId={savedRecipeId}/>
                        }
                    </RecipeContent>
                </RecipeCardContainer>
            </RecipeWrapper>
        )
    }
  }
  
  export default RecipePage;

  const RecipeCardContainer = Wrapper.extend`
    height : auto;
    width : 95%;
  `

  const RecipeTitle = styled.div`
    font-size : 3vh;
    font-style : bold;
    margin : 3vh 0;
    height : 10%;
  `

const RecipeWrapper = Wrapper.extend`
    padding-top : 10vh;
    height : auto;
`

 const RecipeContent = Wrapper.extend`
  width : 90%;
 `

 const RecipeMenu = Wrapper.extend`
  flex-direction : row;
  justify-content : space-around;
`
  