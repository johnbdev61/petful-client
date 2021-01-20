import React, { Component } from 'react'
import Header from './Header'
import HomePage from './HomePage'
import AdoptPage from './AdoptPage'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
      return (
        <div className='app'>  
          <Header />      
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/adopt'} component={AdoptPage} />
          </Switch>
        </div>
      )
  }
}

export default App
