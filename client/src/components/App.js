import React, { Component } from 'react';
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import Home from './Home';
import ProfilePage from './ProfilePage'
import CallbackComponent from './CallbackComponent';
import Cookbook from './CookbookComponent'
import RecipePage from './RecipePage'
import GroceryList from './GroceryList'
import Auth from '../Auth/Auth';
import history from '../Auth/history';
import styled from 'styled-components';


const AppContainer = styled.div`
  width : 100%;
  height: 100%;
`
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();   
  }
}


class App extends Component {

  
  render() {
    return (
      <Router history={history}>
      <AppContainer>
        <NavbarComponent auth={auth}/>      
        <Switch>
          <Route exact path="/" render={(props) => <Redirect to="/home"/>} />
          <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/profile" render={(props) => (!auth.isAuthenticated() ? (<Redirect to="/home"/>) : (<ProfilePage auth={auth} {...props} />))}/>
          <Route exact path="/cookbook" render={(props) => (!auth.isAuthenticated() ? <Redirect to="/home"/> : <Cookbook/>)}/>
          <Route exact path="/recipes/:recipeId" render={(props) => (<RecipePage {...props}/>)}/>
          <Route exact path="/groceryList" render={(props) => (!auth.isAuthenticated() ? (<Redirect to="/home"/>) : (<GroceryList />))}/>
        </Switch>
          <Route exact path="/callback" render={(props) => {handleAuthentication(props); return <CallbackComponent {...props} /> }}/>
      </AppContainer>
    </Router>
    );
  }
}

export default App;
