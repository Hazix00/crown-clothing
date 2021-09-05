import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndUpPage from './pages/sign-in-and-up/signinanduppage.component';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
