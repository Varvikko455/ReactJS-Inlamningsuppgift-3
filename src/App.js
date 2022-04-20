import './App.css';
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Registration from './components/registration'
import Account from './components/account'
import UpdateAccount from './components/updateAccount'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ Registration } exact/>
        <Route path="/account" component={ Account } />
        <Route path="/updateAccount" component={ UpdateAccount } />
      </Switch>
    </div>
  );
}

export default App;
