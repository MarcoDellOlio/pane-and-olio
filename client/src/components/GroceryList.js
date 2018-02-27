import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import GroceryItem from './GroceryItem'
import axios from 'axios'
// import twilio from 'twilio'




class GroceryList extends Component {

    state = {
        groceryList : [],
        phoneNumber : "",
        emailAddress : ""
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
        axios.post(`/api/sms/${this.state.phoneNumber}`, this.state.groceryList)
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

    getCoordinates = (pos) => {
        navigator.geolocation.getCurrentPosition(success)
        function success(pos) {
            var crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
          };
    }


    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY



    componentWillMount = () => {
      this.getGroceryList()
      this.getCoordinates()
    }
    

    render() {
        
          
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
            </Wrapper>
        )
    }
  }
  
  export default GroceryList;
