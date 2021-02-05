import React, { Component } from 'react'
import './AdoptLine.css'

class AdoptLine extends Component {
  render() {
    let people = []
    let node = this.props.queue.first
    while(node) {
      people.push(<li>{node.value}</li>)
      node = node.next
    }
    return (
      <div className='line-center'>
        <ul className='adopt-list'>
          <h2 className='line-header'>Adoption Line</h2>
          {people}
        </ul>
      </div>
    )
  }
}

export default AdoptLine
