import React, { Component } from 'react'
import CookBookRecipe from './CookBookRecipe'
import {Wrapper, Img} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'

class RecipeList extends Component {

  state = {
    recipes : []
  }

  getRecipes = () => {
    const userId = localStorage.userId
    
    axios.get(`api/users/${userId}/recipes`)
    .then((res) => {
      const recipesIdList = res.data.map((recipe) => {
        return recipe.recipeId}).join("%2C")

      axios({
        method: 'get',
        url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=${recipesIdList}&includeNutrition=false`,
        headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
      })
      .then((res) => this.setState({recipes : res.data}))
    })
    .catch((error) => { console.log(error) })
  }

  
  componentWillMount() {
    this.getRecipes()
  }
  

    render() {

        const CookBookRecipesList = this.state.recipes.map( recipe => {
          return (<CookBookRecipe key={recipe.id} {...recipe}/>)
        })
    
        
        return (
            <RecipeListContainer>
                {CookBookRecipesList}
            </RecipeListContainer>

        )
    }
  }
  
  export default RecipeList;

  const RecipeListContainer = Wrapper.extend`

  border : solid 1px black
  
`