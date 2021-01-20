import React, { Component } from 'react'
import AppContext from '../context'

export default class UserLine extends Component {
  static contextType = AppContext

  render() {
    return (
      <>
        <div className='user-queue'>
          { this.context.queue.map(user => <div>
            {user}
          </div>
          ) }
        </div>
        <div>
          <label htmlFor="enter-name">Enter your name </label>
          <input type="text" id='enter-name'/>
          <button>Jump in Line</button>
        </div>
      </>
    )
  }
}
