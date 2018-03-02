import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import IngredientsView from './IngredientsView'
import PreparationView from './PreparationView'
import axios from 'axios'
import styled from 'styled-components'
import FaStar from 'react-icons/lib/fa/star'

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
            if (savedRecipe.length === 1) {
                this.setState({savedRecipeId : savedRecipe[0]._id})
            }

            else {this.setState({savedRecipeId : ""})}
        })
        .catch((error) => { console.log(error) })
    }

    saveOrDeleteRecipe = () => {
        const recipeId = this.state.recipe.id
        const name = this.state.recipe.title
        const userId = localStorage.userId
        const newRecipe = {recipeId, name}
        const recipeDbId = this.state.savedRecipeId
        if (recipeDbId === "") {
            console.log("something happening")
            axios.post(`/api/users/${userId}/recipes`, newRecipe)
            .then(res => this.getSavedRecipeId())
            .catch((error) => { console.log(error) })
        }
        else {
            axios.delete(`/api/users/${userId}/recipes/${recipeDbId}`)
            .then(res => this.getSavedRecipeId())
            .catch((error) => { console.log(error) })
        }
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

        console.log("rendring")

        const recipe = this.state.recipe
        const savedRecipeId = this.state.savedRecipeId
        const ingredients = this.state.recipe.extendedIngredients
        const instructions = this.state.recipe.analyzedInstructions
        const loggedIn = localStorage.id_token

        return (
            
            <RecipeWrapper>
                <RecipeCardContainer>
                    <RecipeTitle>
                        <Title>{recipe.title}</Title> 
                        {loggedIn? <Save isSaved={this.state.savedRecipeId} onClick={() => this.saveOrDeleteRecipe()}> <FaStar/> </Save> : null }
                    </RecipeTitle>

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
    margin : 3vh 0;
    height : 10%;
    width : 100%;
    display : flex;
    align-items : center;
  `
  const Title = styled.div`
    width : 90%;
    margin-left : 5%;
  `

  const Save = styled.div`
    text-align : center;
    width: 10%;
    font-size: 4vh;
    font-weight : bolder;
    color : ${props => {
        if (props.isSaved === undefined) {"#484848"}
        else if (props.isSaved) {return "goldenrod"}
        else {null}
        }} ;
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
  