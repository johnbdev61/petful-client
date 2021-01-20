import React, { Component } from 'react'
import HomePage from './HomePage'
import AdoptPage from './AdoptPage'
import { Switch, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
      return (
        <div className='app'>  
          <Link to='/'><h1>Petful</h1></Link>      
          <Switch>
            <HomePage exact path='/' />
            <AdoptPage path={'/adopt'} />
          </Switch>
        </div>
      )
  }
}

export default App
