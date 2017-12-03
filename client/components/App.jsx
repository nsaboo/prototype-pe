import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Hospital from './Hospital';
import Doctor from './Doctor';
import Pharmacy from './Pharmacy';
import Laboratory from './Laboratory';
import Insurance from './insurance';
import Profile from './Profile';
import Order from './Order';
import Prescription from './Prescription';
import History from './History';
import Wallet from './Wallet';

const AppRoutes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/hospital' component={Hospital}/>
      <Route path='/doctor' component={Doctor}/>
      <Route path='/pharmacy' component={Pharmacy}/>
      <Route path='/laboratory' component={Laboratory}/>
      <Route path='/insurer' component={Insurance}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/order' component={Order}/>
      <Route path='/prescription' component={Prescription}/>
      <Route path='/history' component={History}/>
      <Route path='/wallet' component={Wallet}/>
    </Switch>
  </main>
);


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Layout />
        <AppRoutes />
      </div>
    );
  }
}

export default App;
