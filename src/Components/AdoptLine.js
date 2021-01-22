import React, { Component } from 'react'
import './AdoptLine.css'

class AdoptLine extends Component {
  render() {
    return (
      <div className='center'>
        <ul className='adopt-list'>
          <h2 className='line-header'>Adoption Line</h2>
          <li>{this.props.first}</li>
          <li>{this.props.second}</li>
          <li>{this.props.third}</li>
        </ul>
      </div>
    )
  }
}

export default AdoptLine
