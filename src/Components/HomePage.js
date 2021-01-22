import React, { Component } from 'react'
import AppContext from '../context'
import PeopleService from '../services/people-service'
import { Link } from 'react-router-dom'
import './HomePage.css'

class HomePage extends Component {
  static contextType = AppContext

  handleJoinQueue = (event) => {
    event.preventDefault()
    this.context.clearError()
    this.context.clearPerson()
    let person = document.getElementById('name').value
    console.log('NAME', person)
    this.context.setPerson(person)
    return PeopleService.addPerson(person).then((results) => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/adopt'
      history.push(destination)
    })
  }

  render() {
    return (
      <div>
        <div className='intro'>
          <h2 className='adopt'>Adopt Pure Love</h2>
          <h3>Let's find you a new best friend!</h3>
          <img src='https://static.toiimg.com/photo/msid-74508525/74508525.jpg' />
        </div>
        <div>
          <h3 className='process'>Here is how our process works...</h3>
          <section className='details'>
            <p>
              These cuddle buddies are in high demand, so customers will need to
              click 'Adopt Now!' and enter a queue. There, you will wait your
              turn for the next dog or cat up for adoption. Congratulations on
              taking the first step to finding a new best friend!
            </p>
          </section>
        </div>
        <section className='adopt-about'>
          <h3 className='get-started'>Preview our Pets</h3>
          <Link to='/adopt'>
            <button>Preview Adoptable Pets</button>{' '}
          </Link>
        </section>
        <form onSubmit={this.handleJoinQueue}>
          <h3 className='ready'>
            Are your ready to adopt your new friend? Enter your name below to
            add yourself to the queue of future pet owners!
          </h3>
          <input aria-label='name' type='text' name='name' id='name' placeholder='Enter Name' required />
          <button type='submit'>Join Queue!</button>
        </form>
      </div>
    )
  }
}

export default HomePage
