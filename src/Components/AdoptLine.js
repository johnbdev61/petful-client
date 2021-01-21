import React, { Component } from 'react'

class AdoptLine extends Component {
  render() {
    return (
      <div className='adopt-line'>
        <ul>
          <h2>Adoption Line</h2>
          <li>{this.props.first}</li>
          <li>{this.props.second}</li>
          <li>{this.props.third}</li>
        </ul>
      </div>
    )
  }
}

export default AdoptLine
