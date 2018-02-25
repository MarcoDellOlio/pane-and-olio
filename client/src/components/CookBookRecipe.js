import React, { Component } from 'react'
import {Wrapper, Img} from './BasicComponents'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


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
                    <div onClick={() => this.selectRecipe()}>{recipe.title}</div>
                    {
                        !this.state.selected? null :
                        
                        <div>
                            <Img src={recipe.image} alt=""/>
                            <div><Link to={recipeUrl}>Recipe</Link></div>
                        </div>
                    }        
                </RecipeBar>
                
                
            </Recipe>

        )
    }
  }
  
  export default CookbookRecipe;

  const Recipe = styled.div`
    width : 100%;
    height : auto;
    margin : 2%;
    background-color : green
  `

  const RecipeBar = styled.div`
    width : 100%
  `

  const RecipeContent = styled.div`
    width : 100%;
    height : auto;
  `