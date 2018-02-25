import React, { Component } from 'react'
import {Wrapper, Img} from './BasicComponents'
import RecipeCardList from './RecipeCardList'
import styled from 'styled-components';

class Home extends Component {

  state = {
    
  }

  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Wrapper>
        
        <SplashImage>
          <Img  src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bdd3a5305d7913b82929130ae81fef6&auto=format&fit=crop&w=1355&q=80" alt=""/>
        </SplashImage>

        <RecipeCardList/>


        {isAuthenticated()}
        {!isAuthenticated()}


      </Wrapper>
    );
  }
}

export default Home;

const SplashImage = styled.div`
    width : 100%;
    height : 30%;
    margin : 3%;
`