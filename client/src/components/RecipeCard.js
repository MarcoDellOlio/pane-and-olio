import React, { Component } from 'react'
import { Img} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'
import FaStarO from 'react-icons/lib/fa/star-o'
import glutenfree from './gluten-free.png'
import salad from './salad.png'
import broccoli from './broccoli.png'
import nomilk from './nomilk.png'
import FaClockO from 'react-icons/lib/fa/clock-o'
import { Link } from 'react-router-dom'





class RecipeCard extends Component {

    saveRecipe = () => {
      const recipeId = this.props.id
      const name = this.props.title
      const userId = localStorage.userId
      const newRecipe = {recipeId, name}

      axios.post(`api/users/${userId}/recipes`, newRecipe)
      .then(res => console.log(res))
      .catch((error) => { console.log(error) })

    }

    render() {
        const recipe = this.props
        const loggedIn = localStorage.id_token
        const recipeUrl = `recipes/${recipe.id}`
        return (
          
          
            <CardContainer >
              <Link to={recipeUrl}>
                <RecipeImage> 
                     <CardImg  src={recipe.image} alt=""/>
                 </RecipeImage>
                 <UpperBand>
                    <LogoBarOut>
                      <LogoBar>
                        {this.props.glutenFree? <MiniLogo src={glutenfree} alt=""/> : null}
                        {this.props.vegetarian? <MiniLogo src={salad} alt=""/> : null}
                        {this.props.vegan? <MiniLogo src={broccoli} alt=""/> : null}
                        {this.props.dairyFree? <MiniLogo src={nomilk} alt=""/> : null}
                      </LogoBar>
                      <Time><FaClockO/>{
                        this.props.preparationMinutes? this.props.preparationMinutes
                         : this.props.readyInMinutes
                        }'</Time>  
                    </LogoBarOut>                       
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  {/* {loggedIn? <Save onClick={this.saveRecipe}><FaStarO /></Save> : null } */}
                </UpperBand>
                </Link>
            </CardContainer>
          
        )
    }
  }
  
  export default RecipeCard;

  const CardContainer = styled.div`
    width : 48%;
    max-width : 180px;
    min-height : 188px;
    display : flex;
    flex-direction : column;
    background-color : ghostwhite;
    font-size : 2vh;
    margin-top: 3%;
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
  `
  const RecipeTitle = styled.div`
    min-height: 30px;
  `

  const Save = styled.div`
    text-align : center;
    width: auto;
    font-size: 2vh;
  `

  const CardImg = Img.extend`
    border-top-left-radius : 4px;
    border-top-right-radius : 4px;

  `
  const LogoBar = styled.div`
    min-height : 20px;
    width : 80%;
    display : flex;
  `
  const LogoBarOut = LogoBar.extend`
    width : 100%;
  `

  const MiniLogo = styled.img`
    width : 20px;
    height : 20px;
    margin : 0 2%;
  `
  const Time = styled.div`
    font-size : 2vh;
    width : 20%;
  `

