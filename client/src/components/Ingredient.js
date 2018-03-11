import React, { Component } from 'react'
import { Wrapper } from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'
import FaCheck from 'react-icons/lib/fa/check'
import MdSwapHoriz from 'react-icons/lib/md/swap-horiz'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'
import { withAlert } from 'react-alert'

class Ingredient extends Component {

    state = {
        ingredient: {},
        substitutes: []
    }

    resumeRecipe = () => {
        const recipeId = this.props.recipeId
        const userId = localStorage.userId
        const ingredientId = this.props.id
        axios.get(`/api/users/${userId}/recipes/${recipeId}`)
            .then(res => {
                const ingredientsList = res.data.ingredientsList
                if (!!ingredientsList) {
                    const correctIngredient = ingredientsList.filter(ingredient => { return parseInt(ingredient.ingredientId) === ingredientId })
                    if (!!correctIngredient[0]) {
                        this.isPresent(correctIngredient[0].present)
                    }
                }
            })
    }

    isPresent = (trueOrFalse) => {
        const recipeId = this.props.recipeId
        const userId = localStorage.userId
        const ingredient = {
            name: this.props.name,
            description: this.props.originalString,
            ingredientId: this.props.id,
            present: trueOrFalse
        }

        if (!!recipeId) {
            axios.post(`/api/users/${userId}/recipes/${recipeId}`, ingredient)
                .then(res => {
                    this.setState({ ingredient: res.data.ingredient })
                })
                .catch((error) => { console.log(error) })
        }

        else { this.setState({ ingredient: ingredient }) }
    }

    addToGroceryList = () => {
        const userId = localStorage.userId
        const ingredient = {
            name: this.props.name,
            description: this.props.originalString,
            ingredientId: this.props.id,
            inCart: true
        }
        if (userId) {
            axios.get(`/api/users/${userId}/grocerylist`)
                .then(res => {
                    return res.data.groceryList.some(product => { return product.name === ingredient.name })
                })
                .then(isInList => {
                    if (isInList) {
                        this.props.alert.error(`${ingredient.name} already in list`)
                    }
                    else {
                        this.props.alert.success(`${ingredient.name} added in the cart`)
                    }
                })
                .then(res => { return axios.post(`/api/users/${userId}/grocerylist`, ingredient) })
                .then(res => { this.props.getNumberOfItemsInCart() })
                .catch((error) => { console.log(error) })
        }
        else { this.props.alert.error('You must login for adding the item to your cart') }
    }

    getSubstitutes = () => {
        const isPresent = this.state.ingredient.present
        const ingredientId = this.state.ingredient.ingredientId
        if (isPresent === false) {
            axios({
                method: 'get',
                url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/${ingredientId}/substitutes`,
                headers: { "X-Mashape-Key": process.env.REACT_APP_XMashapeKey }
            })
                .then(res => {
                    if (res.data.substitutes) {
                        this.setState({ substitutes: res.data.substitutes })
                    }
                    // else { this.setState({ substitutes: ["There are no substitutes for this ingredient"] }) }
                })
        }
    }


    componentWillMount() {
        this.resumeRecipe()
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
                    <CheckButtonYes onClick={() => this.isPresent(true)} present={present}><FaCheck /></CheckButtonYes>
                    <IngredientName>{ingredient.originalString} </IngredientName>
                    <CheckButtonNo onClick={() => this.isPresent(false)} present={present}><MdSwapHoriz /></CheckButtonNo>
                    <CheckButton onClick={() => this.addToGroceryList()}><FaCartPlus /></CheckButton>
                </IngredientWrapper>
                {present === false && this.state.substitutes.length !== 0 ?
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

export default withAlert(Ingredient);

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
    justify-content : center;
`
const IngredientName = Wrapper.extend`
    width : 70%;
`
const CheckButton = Wrapper.extend`
    cursor: pointer;
    width : 10%;
    font-size : 3vh;
`

const CheckButtonYes = CheckButton.extend`
    color : ${props => {
        if (props.present === undefined) { return null }
        else if (props.present === false) { return null }
        else { return "green" }
    }};
`
const CheckButtonNo = CheckButton.extend`
    color : ${props => {
        if (props.present === undefined) { return null }
        else if (props.present === false) { return "red" }
        else { return null }
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
    margin : 0.4% 0;
`