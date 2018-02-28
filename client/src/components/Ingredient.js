import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'
import FaCheck from 'react-icons/lib/fa/check'
import FaQuestion from 'react-icons/lib/fa/question'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'





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
            .then(res => {
                if (res.data.substitutes) {
                    this.setState({substitutes : res.data.substitutes}) 
                }
                else {this.setState({substitutes : ["There are no substitutes for this ingredient"]})}   
            })
        }
    }
    


    render() {
        this.getSubstitutes() 
        const ingredient = this.props
        const present = this.state.ingredient.present

        const substitutes = this.state.substitutes.map((substitute, index) => {
            return (
                <Substitute key={index}>{substitute}</Substitute>
            )
        })

        return (
            <OuterWrapper>
                <IngredientWrapper >
                    <CheckButtonYes onClick={() => this.isPresent(true)} present={present}><FaCheck/></CheckButtonYes>
                        <IngredientName>{ingredient.originalString} </IngredientName>
                    <CheckButtonNo onClick={() => this.isPresent(false)} present={present}><FaQuestion/></CheckButtonNo>
                        <CheckButton onClick={() => this.addToGroceryList()}><FaCartPlus/></CheckButton>
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
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    margin : 1%;
    min-height : 5vh;
    text-align : center;
    background-color : ghostwhite;
  `

  const IngredientName = Wrapper.extend`
   width : 70%;
  `


  const CheckButton = Wrapper.extend`
   width : 10%;
   font-size : 3vh;
  `
  const CheckButtonYes = CheckButton.extend`
  color : ${props => {
    if (props.present === undefined) {null}
    else if (props.present === false) {null}
    else {return "green"}
    }};
 `
 const CheckButtonNo = CheckButton.extend`
 color : ${props => {
    if (props.present === undefined) {null}
    else if (props.present === false) {return "red"}
    else {null}
    }} ;
`
  const SubstitutesContainer = Wrapper.extend`
  `

  const Substitute = styled.div`
    text-align : center;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    width : 100%;
  `