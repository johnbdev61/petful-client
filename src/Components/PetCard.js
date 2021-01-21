import React, { Component } from 'react'
import AppContext from '../context'

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
          <h1>{animal.name}</h1>
          <img src={animal.imageURL} />
          <h3>{animal.description}</h3>
          <p>{animal.story}</p>
          <h3>Breed: {animal.breed}</h3>
          <h3>Gender: {animal.gender}</h3>
          <h3>Age: {animal.age}</h3>
        </div>
        <button type='button' onClick={handleAdoptClick} disabled={!isFirst}>
          Adopt Me!
        </button>
      </>
    )
  }
}
