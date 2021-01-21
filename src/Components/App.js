import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import HomePage from './HomePage'
import AdoptPage from './AdoptPage'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <main role='main' className='App-main'>
          <Link to='/'><h1>Petful</h1></Link>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/adopt' component={AdoptPage} />
          </Switch>
        </main>
      </div>
    )
  }
}
