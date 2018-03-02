import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'
import GroceryItem from './GroceryItem'
import axios from 'axios'
import styled from 'styled-components'
import FaMapMarker from 'react-icons/lib/fa/map-marker'
import FaCommentingO from 'react-icons/lib/fa/commenting-o'
import FaEnvelope from 'react-icons/lib/fa/envelope'



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

        axios.get(`/api/users/${userId}/grocerylist`)
        .then(groceryList => {
            this.setState({groceryList : groceryList.data.groceryList} )
        })
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
            let groceryStores = res.data.map(store => {
                return {name : store.name, vicinity : store.vicinity}
            })
            groceryStores = groceryStores.filter((store, index) => {return index < 3 })
            this.setState({groceryStores})
        })
        .catch((error) => { console.log(error) })
    }





    componentWillMount = () => {
      this.getGroceryList()
      this.getStores()
    }
    

    render() {

        const groceryStores = this.state.groceryStores.map((store, index) => {
            return (
                <StoreWrapper key={index}>
                    <StoreLogo>
                        <FaMapMarker/>
                    </StoreLogo>
                    <StoreContent>
                        <StoreName>{store.name}</StoreName>
                        <Address>{store.vicinity}</Address>
                    </StoreContent>
                </StoreWrapper>
            )
        })
        
          
        const groceryList = this.state.groceryList.map((product) => {
            return (
                <GroceryItem key={product._id} {...product} removeItem={this.removeItem}/>
            )
        })

        return (

            <GroceryListWrapper>
                <GroceryContainer>
                    {groceryList}
                </GroceryContainer>
                
            <MessageAndStores>
                <Messages>
                    <SendingForm>
                        <div>Send by text or email</div>
                        <input 
                            placeholder="insert email or phone number"
                            name="emailAddress"
                            onChange={this.handlChange}
                        />
                        <Buttons>
                            <div onClick={this.sendSms}><FaCommentingO/></div>
                            <div onClick={this.sendEmail}><FaEnvelope/></div>
                        </Buttons>
                        
                    </SendingForm>
                </Messages>
                <StoresTitle>Closest Grocery Stores</StoresTitle>
                <Wrapper>
                    {groceryStores}
                </Wrapper>
            </MessageAndStores>

            </GroceryListWrapper>
        )
    }
  }
  
  export default GroceryList;

  const GroceryListWrapper = Wrapper.extend`
    padding-top : 10vh;
    height: auto;
  `

  const GroceryContainer = Wrapper.extend`
    margin : 5% 0;
    width : 90%;
    background-color : ghostwhite;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    height: auto;
  `

  const MessageAndStores = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
  `

  const Messages = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : space-around;
  `
  const Buttons = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : space-around;
    font-size : 4vh;
  `

  const SendingForm = styled.div`
  display : flex;
  flex-direction : column;
  text-align : center
  `

  const StoresTitle = styled.div`
    text-align : center;
    margin-top: 10%;
    font-style : bold;
  `

  const StoreWrapper = styled.div`
    display : flex;
    flex-direction : row;
    width : 90%;
    margin : 3% 0;
  `

  const StoreContent = styled.div`
    display : flex;
    flex-direction : column;
  `

  const StoreLogo = styled.div`
    font-size : 4vh;
  `

  const StoreName = styled.div`
    font-size : 3vh;
    font-weight : 500;
  `

  const Address = styled.div`
   font-weight : 100;
  `