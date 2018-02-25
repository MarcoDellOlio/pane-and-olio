import React, { Component } from 'react'
import {Wrapper, Img} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'

class Cookbook extends Component {

  state = {
    recipes : []
  }

  getRecipes = () => {
    const userId = localStorage.userId
    
    axios.get(`api/recipes/${userId}`)
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
        
        return (
            <Wrapper>
                
            </Wrapper>

        )
    }
  }
  
  export default Cookbook;
