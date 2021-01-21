import React, { Component } from 'react'
import AppContext from '../context'

export default class PetCard extends Component {
  static contextType = AppContext
  render() {
    const { pet, handleAdoptClick } = this.props
    let isFirst = false
    if (this.context.queue) {
      isFirst = this.context.person === this.context.queue.first.value
    }
    return (
      <>
        <div>
          <h1>{pet.name}</h1>
          <img src={pet.imageURL} />
          <h3>{pet.description}</h3>
          <p>{pet.story}</p>
          <h3>Breed: {pet.breed}</h3>
          <h3>Gender: {pet.gender}</h3>
          <h3>Age: {pet.age}</h3>
        </div>
        <button type='button' onClick={handleAdoptClick} disabled={!isFirst}>
          Adopt Me!
        </button>
      </>
    )
  }
}
