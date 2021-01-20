import React, { Component } from 'react'
import AppContext from '../context'

class AdoptCards extends Component {
  static contextType = AppContext

  componentDidMount() {
    this.context.clearCurrDog()
    this.context.clearCurrCat()
  }
  render() {
    return (
      <>
        <div className='selection'>
          <section className='adopt-card'>
            <h2 className='pet-name'>Name: </h2>
            {/* <img src={dogs[0]} /> */}
            <p>Animal Story</p>
            <ul>
              <li>Gender:</li>
              <li>Age:</li>
              <li>Breed:</li>
              <li>Description:</li>
            </ul>
            <button>Adopt</button>
          </section>
        </div>
      </>
    )
  }
}

export default AdoptCards