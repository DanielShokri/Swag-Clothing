import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.cmp';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />

      </Switch>
    </>
  );
}

export default App;
