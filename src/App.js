import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Market from './Market'
import Manager from './Manager'
import NotFound from './NotFound'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path= "/Market/:pagenum" component={Market}/>
            <Route exact path= "/Manager" component={Manager}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
