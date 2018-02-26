import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import axios from 'axios'




class GroceryItem extends Component {

    

  

    render() {

        
    


        return (

            <GroceryWrapper>
                <div> {this.props.name}</div>
                <div onClick={() => this.props.removeItem(this.props._id)}>delete</div>
            </GroceryWrapper>
        )
    }
  }
  
  export default GroceryItem;

  const GroceryWrapper = Wrapper.extend`
    flex-direction : row;
    height : 30px;
 `