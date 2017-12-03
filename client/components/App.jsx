import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Hospital from './Hospital';
import Doctor from './Doctor';
import Pharmacy from './Pharmacy';
import Laboratory from './Laboratory';
import Insurance from './Insurance';
import Profile from './Profile';
import Order from './Order';
import Prescription from './Prescription';
import History from './History';
import Wallet from './Wallet';

const NotFound = () => (
  <div>
    <h1>Page not found.</h1>
  </div>
);

const AppRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hospital" component={Hospital} />
      <Route path="/doctor" component={Doctor} />
      <Route path="/pharmacy" component={Pharmacy} />
      <Route path="/laboratory" component={Laboratory} />
      <Route path="/insurer" component={Insurance} />
      <Route path="/profile" component={Profile} />
      <Route path="/order" component={Order} />
      <Route path="/prescription" component={Prescription} />
      <Route path="/history" component={History} />
      <Route path="/wallet" component={Wallet} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
);


const App = () => (
  <div>
    <Layout />
    <AppRoutes />
  </div>
);

export default App;
