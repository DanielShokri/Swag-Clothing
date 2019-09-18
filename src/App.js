import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.cmp';
import ShopPage from './pages/ShopPage/ShopPage.cmp';
import AppHeader from './components/Header/AppHeader.cmp';
import SignupPage from './pages/SignupPage/SignupPage.cmp';
import { auth } from './firebase/firebase.utils';


function App() {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrUser(user);
      console.log(user);
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, [currUser])

  return (
    <div className="container">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
