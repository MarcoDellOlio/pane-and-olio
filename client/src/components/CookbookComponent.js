import React, { Component } from 'react'
import CookBookRecipeList from './CookBookRecipeList'
import {Wrapper} from './BasicComponents'

class Cookbook extends Component {

    render() {

      const name = localStorage.name? 
        localStorage.name === localStorage.email? localStorage.username 
        : 
        localStorage.name.split(" ")[0]  
        : 
        null
        
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