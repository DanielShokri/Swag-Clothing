import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/HomePage/HomePage.cmp';
import ShopPage from './pages/ShopPage/ShopPage.cmp';
import AppHeader from './components/Header/AppHeader.cmp';
import SignupPage from './pages/SignupPage/SignupPage.cmp';

import { setCurrentUser } from './store/user/userActions';
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
      else setCurrentUser(userAuth)
    })
    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser])

  return (
    <div className="container">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignupPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ userReducer }) => ({
  currentUser: userReducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
