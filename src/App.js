import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header-component';

function App() {
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

export default App;
