import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header-component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component() {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path ='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>  
    );
  }
}

export default App;
