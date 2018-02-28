import React, { Component } from 'react'
import {Wrapper, Img} from './BasicComponents'
import RecipeCardList from './RecipeCardList'
import styled from 'styled-components';
import axios from 'axios'
import GoSearch from 'react-icons/lib/go/search'
import _ from 'lodash'

class Home extends Component {

  state = {
    recipes: [],
    searchWord : ""
  }

  login() {
    this.props.auth.login();

  }

  handlChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    axios({
      method: 'get',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${this.state.searchWord}&number=10`,
      headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
    })
    .then(res => this.setState({recipes : res.data.results}))
    event.preventDefault()
  }

  getRecipes = () => {
      axios({
          method: 'get',
          url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=10',
          headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
        })
      .then((res) => { this.setState({recipes : res.data.recipes}) })
      }
    

  
  componentWillMount() {

      this.getRecipes();
  
  }
  


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <HomeWrapper>
        
        <SplashImage>
          <SearchBar>
          <SearchField onChange={ _.debounce(this.handlChange, 1000, {
                            'leading': true,
                            'trailing': false
                            })} 
            name="searchWord"/>
          <div><GoSearch/></div>
          </SearchBar>
          <Img  src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bdd3a5305d7913b82929130ae81fef6&auto=format&fit=crop&w=1355&q=80" alt=""/>
        </SplashImage>

        <RecipeCardList recipes={this.state.recipes}/>


        {isAuthenticated()}
        {!isAuthenticated()}


      </HomeWrapper>
    );
  }
}

export default Home;

const HomeWrapper = Wrapper.extend`
  padding-top: 10%;
  margin-bottom : 3%;
`

const SearchBar = Wrapper.extend`
  flex-direction : row;
  height : auto;
  width : 200px;
  position : absolute;
  top : 25%;
  left : 25%;
`
const SearchField = styled.input`
  width : 100%;
  height : 20px;
  border-radius : 5px;
  background-color : ghostwhite;
 `

const SplashImage = styled.div`
  width : 100%;
  height : 30%;
`

