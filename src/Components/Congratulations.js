import React, { Component } from 'react'
import './Congratulations.css'

export default class Congratulations extends Component {
  render() {
    const { imgSrc, name, owner} = this.props
    return (
      <div>
        <img src={imgSrc} alt="pet"/>
        <p>Name: {name}</p>
        <p>New Bestie: {owner}</p>
        <button to='/'>Go to Home</button>
      </div>
    )  
  }
}
