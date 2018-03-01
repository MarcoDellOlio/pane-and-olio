import React, { Component } from 'react'
import GoX from 'react-icons/lib/go/x'
import styled from 'styled-components'





class GroceryItem extends Component {

    render() {

        return (

            <GroceryWrapper>
                <GroceryName> {this.props.name}</GroceryName>
                <Cross onClick={() => this.props.removeItem(this.props._id)}><GoX /></Cross>
            </GroceryWrapper>
        )
    }
}

export default GroceryItem;

const GroceryWrapper = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    width : 100%;
    font-size : 3vh;
    height : 50px;
 `
const GroceryName = styled.div`
    width : 80%;
    text-align: left;
    margin-left: 5%;
`
const Cross = styled.div`
    width : 20%;
    text-align: right;
    margin-right: 5%;
`