import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import GroceryItem from './GroceryItem'
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

    removeItem = (productId) => {
        const userId = localStorage.userId
        axios.delete(`/api/users/${userId}/grocerylist/${productId}`)
        .then((res) => this.setState({groceryList : res.data}))
    }

    componentWillMount = () => {
      this.getGroceryList()
    }
    

    render() {

        const groceryList = this.state.groceryList.map((product) => {
            return (
                <GroceryItem key={product._id} {...product} removeItem={this.removeItem}/>
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
