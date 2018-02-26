import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Navbar} from './BasicComponents'
import styled from 'styled-components';

class NavbarComponent extends Component {

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {

    const { isAuthenticated } = this.props.auth;
    const name = localStorage.name? 
        localStorage.name === localStorage.email? localStorage.username 
        : 
        localStorage.name.split(" ")[0]  
      : 
      null

    return (

      <Navbar>
        
            <div> <Link to='/home'>Home</Link> </div>
            
            {
              !isAuthenticated()? 
              <LoginInfo>
                <button onClick={this.login.bind(this)}> Log In </button>
              </LoginInfo>  
            :
              <LoginInfo>
                <button onClick={this.logout.bind(this)}> Log Out </button>
                <div> Hi {name}</div>
                <div> <Link to='/cookbook'>Cookbook</Link> </div>
                <div><Link to='/groceryList'>Grocery List</Link></div>
                
              </LoginInfo> 
            }
            

         
      </Navbar>
    );
  }
}

export default NavbarComponent;

const LoginInfo = styled.div`
  height : 100%;
  width :auto;
  display : flex;
  align-items : center;
`