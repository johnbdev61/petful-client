import React, { Component } from 'react'
import AppContext from '../context'
import './PetCard.css'

export default class PetCard extends Component {
  static contextType = AppContext
  render() {
    const { pet, handleAdoptClick } = this.props
    let isFirst = false
    if (this.context.queue.first) {
      isFirst = this.context.person === this.context.queue.first.value
    }
    return (
      <>
        <div>
          <h3 className='pet-info'>{pet.name}</h3>
          <img src={pet.imageURL} alt={pet.description} />
          <h3 className='pet-info'>{pet.name}</h3>
          <p className='story'>{pet.story}</p>
          <h3 className='pet-info'>Breed: {pet.breed}</h3>
          <h3 className='pet-info'>Gender: {pet.gender}</h3>
          <h3 className='pet-info'>Age: {pet.age}</h3>
        </div>
        <button type='button' onClick={handleAdoptClick} disabled={!isFirst}>
          Adopt Me!
        </button>
        <hr/>
      </>
    )
  }
}
