import React, { Component } from 'react'
import AppContext from '../context'
import './PetCard.css'

export default class PetCard extends Component {
  static contextType = AppContext
  render() {
    const { animal, handleAdoptClick } = this.props
    let isFirst = false
    if (this.context.queue) {
      isFirst = this.context.person === this.context.queue.first.value
    }
    return (
      <>
        <div>
          <h3 className='pet-info'>{animal.name}</h3>
          <img src={animal.imageURL} />
          <h3 className='pet-info'>{animal.description}</h3>
          <p className='story'>{animal.story}</p>
          <h3 className='pet-info'>Breed: {animal.breed}</h3>
          <h3 className='pet-info'>Gender: {animal.gender}</h3>
          <h3 className='pet-info'>Age: {animal.age}</h3>
        </div>
        <button type='button' onClick={handleAdoptClick} disabled={!isFirst}>
          Adopt Me!
        </button>
      </>
    )
  }
}
