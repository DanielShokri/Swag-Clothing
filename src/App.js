import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/HomePage.cmp';
import ShopPage from './pages/ShopPage/ShopPage.cmp';
import AppHeader from './components/Header/AppHeader.cmp';
import SignupPage from './pages/SignupPage/SignupPage.cmp';
import CheckoutPage from './pages/CheckOutPage/CheckOutPage.cmp';

import { setCurrentUser } from './store/user/userActions';
import { selectCurrentUser   } from './store/user/userSelectors'
import './App.scss';


function App(props) {
  const { setCurrentUser, currentUser } = props

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }
      setCurrentUser(userAuth)
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser])

  return (
    <div>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignupPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
