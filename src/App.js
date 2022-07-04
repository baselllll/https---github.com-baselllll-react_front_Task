import React, { Component } from 'react'
import Navbar from './conponents/Navbar/Navbar'
import Home from './conponents/Home/Home.jsx'
import AddProduct from './conponents/addProduct/AddProduct'
import Notfound from './conponents/Notfound/Notfound.jsx'

import {Route,Switch} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
          <Navbar/>
          
          <Switch>
            <Route path="/home" component={Home} />
            <Route path='/addProduct' component={AddProduct}/>
            <Route path='*' component={Notfound}/>
            
          </Switch>
          
      </>
    )
  }
}

