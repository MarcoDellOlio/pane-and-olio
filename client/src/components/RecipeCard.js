import React, { Component } from 'react'
import { Img} from './BasicComponents'
import styled from 'styled-components'
import FaClockO from 'react-icons/lib/fa/clock-o'
import { Link } from 'react-router-dom'





class RecipeCard extends Component {

   

    render() {
        const recipe = this.props
        const recipeUrl = `recipes/${recipe.id}`
        return (
          
          
            <CardContainer >
              <Link to={recipeUrl}>
                <RecipeImage>
                     <CardImg  src={recipe.image} alt=""/>
                 </RecipeImage>
                 <UpperBand>
                    <RecipeTitle>{recipe.title}</RecipeTitle>
                    <LogoBarOut>
                      <LogoBar>
                        {this.props.glutenFree? <Diet>GF</Diet> : null}
                        {this.props.vegetarian? <Diet>V</Diet> : null}
                        {this.props.vegan? <Diet>VG</Diet> : null}
                        {this.props.dairyFree? <Diet>DF</Diet> : null}
                        {this.props.ketogenic? <Diet>K</Diet> : null}
                      </LogoBar>
                      <Time><FaClockO/>{
                        this.props.preparationMinutes? this.props.preparationMinutes
                         : this.props.readyInMinutes
                        }'</Time>  
                    </LogoBarOut>                       
                </UpperBand>
                </Link>
            </CardContainer>
          
        )
    }
  }
  
  export default RecipeCard;

  const CardContainer = styled.div`
    width : 45%;
    max-width : 180px;
    min-height : 188px;
    display : flex;
    flex-direction : column;
    background-color : ghostwhite;
    font-size : 2vh;
    margin: 2% 0% 1% 3%;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
  `

  const UpperBand = styled.div`
    width : 100%;
    height : 20%;
    display : flex;
    flex-direction : column;
    align-items : center;
  `

  const RecipeImage = styled.div`
    width : 100%;
    height : auto;
    border-radius : 10px;
    position : relative;
  `
  const RecipeTitle = styled.div`
    min-height: 45px;
    text-align : left;
    width : 100%;
    font-weight : 500;
  `
  
  const CardImg = Img.extend`
    border-top-left-radius : 4px;
    border-top-right-radius : 4px;

  `
  const LogoBar = styled.div`
    min-height : 20px;
    width : 75%;
    display : flex;
  `
  const LogoBarOut = LogoBar.extend`
    width : 100%;
  `

  const Diet = styled.div`
    width : 20px;
    height : 20px;
    margin : 0 2%;
    text-align : center;
    font-weight: 100;
  `
  const Time = styled.div`
    font-size : 2vh;
    width : 25%;
  `

