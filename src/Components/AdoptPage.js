import React, { Component } from 'react'
import AdoptCards from './AdoptCards'
import UserLine from './UserLine'

class AdoptPage extends Component {
  render() {
    return (
      <>
        <div className='adoptions'>
          <h3>Here are the available pets</h3>
          <AdoptCards />
        </div>
        <section className='user-line'>
          <UserLine />
        </section>
      </>
    )
  }
}

export default AdoptPage