import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
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
          <section className ='details'>
            <p>
              These cuddle buddies are in high demand, so customers will need to click 'Adopt Now!' and enter a queue. There, you will wait your turn for the next dog or cat up for adoption. Congratulations on taking the first step to finding a new best friend!
            </p>
          </section>
        </div>
        <section className='adopt-about'>
          <h3>Let's get started!</h3>
          <Link to='/adopt'>
            <button>Adopt a Friend</button>
          </Link>
        </section>
      </div>
    )
  }
}

export default HomePage
