import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import axios from 'axios';
import GoX from 'react-icons/lib/go/x'
import styled from 'styled-components'





class GroceryItem extends Component {

    

  

    render() {

        
    


        return (

            <GroceryWrapper>
                <GroceryName> {this.props.name}</GroceryName>
                <Cross onClick={() => this.props.removeItem(this.props._id)}><GoX/></Cross>
            </GroceryWrapper>
        )
    }
  }
  
  export default GroceryItem;

  const GroceryWrapper = Wrapper.extend`
    flex-direction : row;
    height : 30px;
    align-items : center;
    width : 100%;
    font-size : 3vh;
    margin : 10px 0;
 `
 const GroceryName = styled.div`
width : 80%;
 text-align : center;
 margin-left : 10%;
`
const Cross = styled.div`
width : 20%;
`