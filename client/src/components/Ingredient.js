import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class Ingredient extends Component {

    state = {
        ingredient : {},
        substitutes : []
    }

    isPresent = (trueOrFalse) => {
        const recipeId = this.props.recipeId
        const userId = localStorage.userId
        const ingredient = {
            name: this.props.name,
            description : this.props.originalString,
            ingredientId: this.props.id,
            present : trueOrFalse
        }
        axios.post(`/api/users/${userId}/recipes/${recipeId}` , ingredient)
        .then(res => {
            this.setState({ingredient : res.data.ingredient})
        })
        .catch((error) => { console.log(error) })
    }

    addToGroceryList = () => {
        const userId = localStorage.userId
        const recipeId = this.props.recipeId
        const ingredient = {
            name: this.props.name,
            description : this.props.originalString,
            ingredientId: this.props.id,
            inCart : true
        }
       axios.post(`/api/users/${userId}/recipes/${recipeId}` , ingredient)
       .then(res => { 
        return axios.post(`/api/users/${userId}/grocerylist` , res.data.ingredient)
       })
       .then(res => console.log(res))
       .catch((error) => { console.log(error) })
    }

    getSubstitutes = () => {
        const isPresent = this.state.ingredient.present
        const ingredientId = this.state.ingredient.ingredientId
        if (isPresent === false) {
            axios({
                method: 'get',
                url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/${ingredientId}/substitutes`,
                headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
              })
            .then(res => this.setState({substitutes : res.data.substitutes}))
        }
    }
    


    render() {
        this.getSubstitutes() 
        const ingredient = this.props
        const present = this.state.ingredient.present

        const substitutes = this.state.substitutes.map((ingredient, index) => {
            return (
                <div key={index}>{ingredient}</div>
            )
        })

        return (
            <OuterWrapper>
                <IngredientWrapper present={present} >
                        <div>{ingredient.originalString} </div>
                        <CheckButton onClick={() => this.isPresent(true)} >ok</CheckButton>
                        <CheckButton onClick={() => this.isPresent(false)} >no</CheckButton>
                        <div onClick={() => this.addToGroceryList()}>buy</div>
                </IngredientWrapper>       
                
                        {present === false?
                        <SubstitutesContainer>
                            {substitutes}
                        </SubstitutesContainer>
                        :
                            null
                        }
                    
                
           </OuterWrapper>

        )
    }
  }
  
  export default Ingredient;

  const OuterWrapper = Wrapper.extend`
  `

  const IngredientWrapper = Wrapper.extend`
   flex-direction : row;
   background-color : ${props => {
       if (props.present === undefined) {return "grey"}
       else if (props.present === false) {return "red"}
       else {return "green"}
   }};
  `


  const CheckButton = styled.div`
  
  `

  const SubstitutesContainer = Wrapper.extend`
   text-align : left
  `