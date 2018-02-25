import React, { Component } from 'react'
import {Wrapper, Img} from './BasicComponents'
import styled from 'styled-components'


class CookbookRecipe extends Component {


    render() {

        const recipe = this.props
        
        return (
            <div>
                {recipe.title}
            </div>

        )
    }
  }
  
  export default CookbookRecipe;