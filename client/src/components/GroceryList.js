import React, { Component } from 'react'
import {Wrapper, Img} from './BasicComponents'
import GroceryItem from './GroceryItem'
import axios from 'axios'
import styled from 'styled-components'
import FaMapMarker from 'react-icons/lib/fa/map-marker'
import FaCommentingO from 'react-icons/lib/fa/commenting-o'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import { withAlert } from 'react-alert'

const getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

 
class GroceryList extends Component {

    state = {
        groceryList : [],
        groceryStores : [],
        emailOrNumber : ""
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
        .then((res) => {
            this.props.getNumberOfItemsInCart()
            this.setState({groceryList : res.data})    
        })
        .catch((error) => { console.log(error) })
    }

    handlChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    sendSms = (event) => {
        if (!isNaN(this.state.emailOrNumber)) {
            axios.post(`/api/sms/${this.state.emailOrNumber}`, this.state)
            .then(res => {
                console.log(res)
                this.props.alert.success(`Text sent to ${this.state.emailOrNumber}`)
            })
            .catch((error) => { console.log(error) })
            event.preventDefault()
        }
        else {
            this.props.alert.error('Insert a valid phone number')
        }
        
    }

    sendEmail = (event) => {
            if (this.state.emailOrNumber.includes("@")) {
                axios.post(`/api/email/${this.state.emailOrNumber}`, this.state)
                .then(res => {
                    console.log(res)
                    this.props.alert.success(`Email sent to ${this.state.emailOrNumber}`)
                })
                .catch((error) => { console.log(error) })
                 event.preventDefault()
            } 
            else { this.props.alert.error('Insert a valid email')}
       
    }

    getStores = () => {
        getPosition()
        .then((position) => {
            const long = position.coords.longitude
            const lat = position.coords.latitude
            return axios.get(`/api/gmap?long=${long}&lat=${lat}`)
        })
        .then((res) => {
            let groceryStores = res.data.map(store => {
                return {name : store.name, vicinity : store.vicinity}
            })
           return groceryStores = groceryStores.filter((store, index) => {return index < 3 })
        })
        .then((groceryStores => this.setState({groceryStores})))
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
                <GroceryItem key={product._id}
                    {...product} 
                    removeItem={this.removeItem}
                    getNumberOfItemsInCart={this.props.getNumberOfItemsInCart}
                />
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
                            name="emailOrNumber"
                            onChange={this.handlChange}
                        />
                        <Buttons>
                            <Send onClick={this.sendSms}><FaCommentingO/></Send>
                            <Send onClick={this.sendEmail}><FaEnvelope/></Send>
                        </Buttons>
                        
                    </SendingForm>
                </Messages>
                <StoresTitle>Closest Grocery Stores</StoresTitle>
                <Wrapper>
                    {
                        this.state.groceryStores.length > 0? 
                        groceryStores 
                        :
                        <Img src="https://media.giphy.com/media/EhTIih4rcMoSI/source.gif" alt=""/> 
                    }
                </Wrapper>
            </MessageAndStores>

            </GroceryListWrapper>
        )
    }
  }
  
  export default withAlert(GroceryList);

  const GroceryListWrapper = Wrapper.extend`
    padding-top : 10vh;
    min-height: 100%;
    flex-direction : row;
    flex-wrap : wrap;
    justify-content : center;
  `

  const GroceryContainer = Wrapper.extend`
    margin : 5% 0;
    flex-wrap : wrap;
    width : 90%;
    background-color : ghostwhite;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    height: auto;
    max-width : 300px;
    @media (min-width: 420px) {
        margin : 5% 5%;
      }
  `

  const MessageAndStores = styled.div`
    width : 100%;
    display : flex;
    height : auto;
    flex-direction : column;
    max-width : 300px;
    @media (min-width: 420px) {
        margin : 5% 5%;
      }
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

const Send = styled.div`
    cursor: pointer;
`