import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.cmp';
import ShopPage from './pages/ShopPage/ShopPage.cmp';
import AppHeader from './components/Header/AppHeader.cmp';
import SignupPage from './pages/SignupPage/SignupPage.cmp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


function App() {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }
      else setCurrUser(userAuth)
    })
    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  return (
    <div className="container">
      <AppHeader currUser={currUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
