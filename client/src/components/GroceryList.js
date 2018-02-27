import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import GroceryItem from './GroceryItem'
import axios from 'axios'

const getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

class GroceryList extends Component {

    state = {
        groceryList : [],
        phoneNumber : "",
        emailAddress : "",
        groceryStores : []
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

    handlChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    sendSms = (event) => {
        axios.post(`/api/sms/${this.state.phoneNumber}`, this.state)
            .then(res => {
                console.log(res)
            })
            .catch((error) => { console.log(error) })
        event.preventDefault()
    }

    sendEmail = (event) => {
        axios.post(`/api/email/${this.state.emailAddress}`, this.state.groceryList)
            .then(res => {
                console.log(res)
            })
            .catch((error) => { console.log(error) })
        event.preventDefault()
    }

    getStores = () => {
        getPosition()
        .then((position) => {
            console.log(position.coords.longitude)
            const long = position.coords.longitude
            const lat = position.coords.latitude
            return axios.get(`/api/gmap?long=${long}&lat=${lat}`)
        })
        .then((res) => {
            const groceryStores = res.data.map(store => {
                return {name : store.name, vicinity : store.vicinity}
            })
            this.setState({groceryStores})
        })
        .catch((error) => { console.log(error) })
    }





    componentWillMount = () => {
      this.getGroceryList()
      this.getStores()
    }
    

    render() {

        const groceryStores = this.state.groceryStores.map((store) => {
            return (
                <div>{store.name} - {store.vicinity}</div>
            )
        })
        
          
        const groceryList = this.state.groceryList.map((product) => {
            return (
                <GroceryItem key={product._id} {...product} removeItem={this.removeItem}/>
            )
        })

        return (

            <Wrapper>
                <div>Grocery List</div>
                {groceryList}

                <div>Send by SMS</div>
                <input name="phoneNumber" onChange={this.handlChange}/>
                <button onClick={this.sendSms}>Send</button>

                <div>Send by Email</div>
                <input name="emailAddress" onChange={this.handlChange}/>
                <button onClick={this.sendEmail}>Send</button>

                <Wrapper>
                    {groceryStores}
                </Wrapper>

            </Wrapper>
        )
    }
  }
  
  export default GroceryList;
