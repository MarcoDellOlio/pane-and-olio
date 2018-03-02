import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import axios from 'axios'
import RecipeCard from './RecipeCard'

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
          return (<RecipeCard key={recipe.id} {...recipe}/>)
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
    flex-direction : row;
    flex-wrap : wrap;
    justify-content : start;
    height : auto;
`