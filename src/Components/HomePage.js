import React, { Component } from 'react'
import AppContext from '../context'
import peopleService from '../context'
import { Link } from 'react-router-dom'


class HomePage extends Component {
  static contextType = AppContext

  handleJoinQueue = (event) => {
    event.preventDefault()
    this.context.clearError()
    this.context.clearPerson()
    let name = document.getElementById('name').value
    return peopleService.addPerson(name).then((results) => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/adopt'
      history.push(destination)
    })
  }

  render() {    
    return (
      <div>
        <div className='intro'>
          <h2>Adopt Pure Love</h2>
          <h3>Let's find you a new best friend!</h3>
          <img src='https://static.toiimg.com/photo/msid-74508525/74508525.jpg' />
        </div>
        <div className='process'>
          <h3>Here is how our process works...</h3>
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
          <h3>Let's get started!</h3>
          <Link to='/adopt'>
            <button>Preview Adoptable Pets</button>{' '}
          </Link>
        </section>
        <form action="">
          <h3>Are your ready to adopt your ne friend? Enter your name below to add yourself to the queue of future pet owners!</h3>
          <input 
          areia-label='name'
          type='text'
          id='name'
          required
          />
          <button type='submit'>Join Queue!</button>
        </form>
      </div>
    )
  }
}

export default HomePage
