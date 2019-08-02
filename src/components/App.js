import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Main from './Main';
import Results from './Results';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <CssBaseline />
    <Header />
    <Switch>
      <Route path='/' component={Main} exact />
      <Route path='/results' component={Results} />
    </Switch>
  </Router>
)

export default App;
