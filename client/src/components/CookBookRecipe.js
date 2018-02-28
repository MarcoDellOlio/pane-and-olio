import React, { Component } from 'react'
import {Img} from './BasicComponents'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import chef from './chef.png'
import FaArrowRight from 'react-icons/lib/fa/arrow-right'


class CookbookRecipe extends Component {

    state = { 
        selected : false
    }

    selectRecipe = () => {
        !this.state.selected? 
            this.setState({selected : true})
        :
            this.setState({selected : false})
    }

   

    render() {

        const recipe = this.props
        const recipeUrl = `recipes/${recipe.id}`
        return (
            <Recipe >
                <RecipeBar>
                    <RecipeTitle onClick={() => this.selectRecipe()}>{recipe.title}</RecipeTitle>
                 
                    <Kitchen>  <FaArrowRight/> </Kitchen>     
                </RecipeBar>
                {
                        !this.state.selected? null :
                        
                        <div>
                            <Img src={recipe.image} alt=""/>
                            {/* <RecipeLink><Link to={recipeUrl}>Recipe</Link></RecipeLink> */}
                        </div>
                    }
                
            </Recipe>

        )
    }
  }
  
  export default CookbookRecipe;

  const Recipe = styled.div`
    width : 100%;
    height : auto;
    margin : 2%;
    background-color : ghostwhite;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    
  `

  const RecipeBar = styled.div`
    width : 100%;
    min-height : 5vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : row;
  `

  const RecipeTitle = styled.div`
    min-height : 5vh;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    width : 90%;
  `

  const RecipeLink = styled.div`
    text-align : center;
  `

  const Kitchen = styled.div`
    width : 10%;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 2vh;
    color : #e0300d;
    
  `