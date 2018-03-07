import React, { Component } from 'react';
import { Route, Router, Redirect, Switch} from 'react-router-dom';
import axios from 'axios'
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
import Pusher from 'pusher-js';

const pusher = new Pusher('4cb22b1b0d97095c5f2a', {
  cluster: 'us2',
  encrypted: true
});

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();   
  }
}

class App extends Component {
  
  state = {
    
  }

  getNumberOfItemsInCart = () => {
    const userId = localStorage.userId
    axios.get(`/api/users/${userId}/grocerylist`)
    .then(res => {
      const itemsInCart = res.data.groceryList.length
      this.setState({itemsInCart})
    })
    
  }

  getRecipeByVoice = () => {
    const channel = pusher.subscribe('my-channel');
    
    channel.bind('my-event', data => {
    console.log(data.searchWord)
    
    axios({
      method: 'get',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${data.searchWord}&number=10`,
      headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
    })
    .then(res => {
      const idList = res.data.results.map(recipe => {return recipe.id}).join("%2C")
      return axios({
              method: 'get',
              url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=${idList}&includeNutrition=false`,
              headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
            })
    })
    .then( res => {
      // console.log(res.data)
      this.setState({recipes : res.data})
      history.push('/');
      // Router.refresh();
    })
    
    });
  }

  
  componentWillMount() {
    this.getNumberOfItemsInCart()
  }

  componentDidMount = () => {
    this.getRecipeByVoice()
  }
  
  render() {



    return (
      <Router history={history}>
      <AppContainer>
        <NavbarComponent auth={auth} itemsInCart={this.state.itemsInCart}/>      
        <Switch>
          <Route exact path="/" render={(props) => <Redirect to="/home"/>} />
          <Route exact path="/home" render={(props) => <Home auth={auth} {...props} voiceSearch={this.state.recipes}/>} />
          <Route exact path="/profile" render={(props) => 
            (!auth.isAuthenticated() ? 
            (<Redirect to="/home"/>) : 
            (<ProfilePage auth={auth} {...props} />))}/>

          <Route exact path="/cookbook" render={(props) => 
            (!auth.isAuthenticated() ? 
            <Redirect to="/home"/> : 
            <Cookbook/>)}/>

          <Route exact path="/recipes/:recipeId" render={(props) => 
            (<RecipePage {...props} getNumberOfItemsInCart={this.getNumberOfItemsInCart}/>)}/>

          <Route exact path="/groceryList" render={(props) => 
            (!auth.isAuthenticated() ? 
            (<Redirect to="/home"/>) : 
            (<GroceryList getNumberOfItemsInCart={this.getNumberOfItemsInCart}/>))}/>

        </Switch>
          <Route exact path="/callback" render={(props) => 
            {handleAuthentication(props); 
            return <CallbackComponent {...props} /> }}/>
      </AppContainer>
    </Router>
    );



  }
}

export default App;

const AppContainer = styled.div`
  width : 100%;
  height: 100%;
`