import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndUpPage from './pages/sign-in-and-up/signinanduppage.component';
import React from 'react';
import { onSnapshot } from 'firebase/firestore';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({ currentUser: user });
      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth)

        onSnapshot(userRef, {
          next: (userSnap) => {
            console.log('onAuthStateChanged id', userSnap.id)
            console.log('onAuthStateChanged data', userSnap.data())
            this.setState({
              currentUser: userSnap.id,
              ...userSnap.data()
            })
          },
          error: (error) => {
            console.error('Canot login the user', error)
          }
        });

      }
      else {
        this.setState({currentUser: null})
      }
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
