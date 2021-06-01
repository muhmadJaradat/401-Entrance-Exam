import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/utilities/Header';
import Favorite from './components/views/Favorite';
import Home from './components/views/Home';

export class App extends Component {
  render() {
    return (
   
        <BrowserRouter>
          <Header/>
<Switch>
  <Route exact path='/'>
<Home/>
  </Route>
  <Route exact path='/favorite'>
<Favorite/>
  </Route>
</Switch>

        </BrowserRouter>
     
    )
  }
}

export default App
