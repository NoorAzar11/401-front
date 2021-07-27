import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './componets/Home'
import FavPage from './componets/FavPage'
import Header from './componets/Header'

export class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/Fav"> <FavPage /> </Route>
        </Switch>
      </Router>
    </>

    )
  }
}

export default App
