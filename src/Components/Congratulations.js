import React, { Component } from 'react'

export default class Congratulations extends Component {
  render() {
    const { imgSrc, name, owner} = this.props
    return (
      <div>
        <h2>Congrats on Your New Bestie!</h2>
        <img src={imgSrc} alt="pet"/>
        <p>Name: {name}</p>
        <p>Owner: {owner}</p>
      </div>
    )
  }
}
