import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class Ingredient extends Component {

    state = {
        ingredient : {}
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
            console.log(res)
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

    
    componentWillMount() {
        
    }
    


    

    render() {

        const ingredient = this.props
        const present = this.state.ingredient.present

        return (
           <IngredientWrapper present={present} >
                <div>{ingredient.originalString} </div>
                <CheckButton onClick={() => this.isPresent(true)} >ok</CheckButton>
                <CheckButton onClick={() => this.isPresent(false)} >no</CheckButton>
                <div onClick={() => this.addToGroceryList()}>buy</div>
           </IngredientWrapper>


        )
    }
  }
  
  export default Ingredient;

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