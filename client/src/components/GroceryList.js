import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import axios from 'axios'




class GroceryList extends Component {

    state = {
        groceryList : []
      }

    getGroceryList = () => {
        const userId = localStorage.userId

        axios.get(`/api/users/${userId}/grocerylist`).
        then(groceryList => 
            this.setState({groceryList : groceryList.data.groceryList} )
        )
        .catch((error) => { console.log(error) })
    }
        


    componentWillMount = () => {
      this.getGroceryList()
    }
    

    render() {

        
        const groceryList = this.state.groceryList.map((product) => {
            return (
                <div key={product._id}>{product.name}</div>
            )
        })
        console.log(this.state.groceryList)


        return (

            <Wrapper>
                <div>Grocery List</div>
                {groceryList}

            </Wrapper>
        )
    }
  }
  
  export default GroceryList;
