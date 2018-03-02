import React, { Component } from 'react'
import CookBookRecipeList from './CookBookRecipeList'
import {Wrapper} from './BasicComponents'

class Cookbook extends Component {

    render() {


        
        return (
            <CookbookWrapper>


              <CookBookRecipeList/>

                
            </CookbookWrapper>

        )
    }
  }
  
  export default Cookbook;

  const CookbookWrapper = Wrapper.extend`
    padding-top : 10vh;
  `