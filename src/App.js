import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.cmp';
import ShopPage from './pages/ShopPage/ShopPage.cmp';
import AppHeader from './components/Header/AppHeader.cmp';


function App() {
  return (
    <div class="container">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
