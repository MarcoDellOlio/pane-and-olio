import React, { Component } from 'react'
import CookBookRecipeList from './CookBookRecipeList'
import {Wrapper, Img} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'

class Cookbook extends Component {

    render() {

      const name = localStorage.name? 
        localStorage.name === localStorage.email? localStorage.username 
        : 
        localStorage.name.split(" ")[0]  
        : 
        null
        
        return (
            <Wrapper>

              <div>{name}'s Cookbook </div>

              <CookBookRecipeList/>

                
            </Wrapper>

        )
    }
  }
  
  export default Cookbook;

  