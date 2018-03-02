import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Img} from './BasicComponents'
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'
import logo from './olive-oil.png'


class NavbarComponent extends Component {

  state = {
    currentPage : ""
  }

  setCurrentPage = (currentPage, event) => {
    this.setState({currentPage})
  }

  showSettings (event) {
    event.preventDefault();
    
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {

    const itemsInCart = this.props.itemsInCart
    const { isAuthenticated } = this.props.auth;
    const name = localStorage.name? 
        localStorage.name === localStorage.email? localStorage.username 
        : 
        localStorage.name.split(" ")[0]  
      : 
      null

    return (

     

      <Navbar>

            <HomeLogo> 
              <Link to='/home'
              onClick={() => this.setCurrentPage("home")}>
              <Logo src={logo} alt=""/></Link> 
            </HomeLogo>
              {!isAuthenticated()? 
              <LoginInfo/>
            :
            <LoginInfo>
              <NavItem> Hi {name}</NavItem>
              <NavCookBook currentPage={this.state.currentPage}> 
                <Link to='/cookbook'
                onClick={() => this.setCurrentPage("cookbook")}>
                Cookbook
                </Link> 
              </NavCookBook>
              <NavGrocery currentPage={this.state.currentPage}>
                <Link to='/groceryList' 
                  onClick={() => this.setCurrentPage("groceryList")}>
                  Grocery List
                </Link>
                <ItemsInCart>{itemsInCart > 0? itemsInCart : null}</ItemsInCart>
              </NavGrocery>
              
            </LoginInfo>
              }
            <LogIn>
              {!isAuthenticated()? 
              <div onClick={this.login.bind(this)}>Log In</div> : 
              <div onClick={this.logout.bind(this)}>Log Out</div>
              }
            </LogIn>
         
      </Navbar>
    );
  }
}

export default NavbarComponent;

export const Navbar = styled.div`
    width : 96%;
    height : 10vh;
    display : flex;
    align-items : center;
    padding : 0 2%;
    font-size : 2vh;
    background-color : ghostwhite;
    position : fixed;
    z-index : 999;
`

const LoginInfo = styled.div`
  height : 100%;
  width : 69%;
  display : flex;
  justify-content : space-around;
  align-items : center;
`
const NavItem = styled.div`
  height : 100%;
  display : flex;
  align-items : center;
`
const NavGrocery = NavItem.extend`
  text-decoration: ${props => {
    if (props.currentPage === "groceryList")
    { return "underline" }
    else {return null}
  }};
`
const NavCookBook = NavItem.extend`
  text-decoration: ${props => {
    if (props.currentPage === "cookbook")
    { return "underline" }
    else {return null}
}};
`

const ItemsInCart = styled.div`
  height : 100%;
  display : inline-block;
  padding-top: 40%;
  color : red;
  text-decoration: ${props => {
    if (props.currentPage === "groceryList")
    { return "none" }
    else {return "none" }
  }}
`

const HomeLogo = styled.div`
  width : 35px;
`

const LogIn = styled.div`
width : 16%;
text-align : right;
`
const Logo = styled.img`
  width : 70%
`