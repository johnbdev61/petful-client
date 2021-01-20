import React, { Component } from 'react'
import Pet from './Pet'
import PetLine from './PetLine'
import peopleService from '../services/people-service'
import petsService from '../services/pets-service'

class AdoptPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      people: [],
      names: [
        'Agatha',
        'Brinette',
        'Chris',
        'Desdemona',
        'Evelyn',
        'Francis',
        'Grant',
      ],
      dog: [],
      cat: [],
      loaded: false,
      userInQueue: null,
      userAdopted: false,
      adoptedPet: null,
    }
  }

  //get value from server and update
  updateData = () => {
    peopleService.getPeople().then((res) => {
      this.setState({
        people: res,
      })
    })
    petsService.getPets().then((res) => {
      this.setState({ dog: res.dog, cat: res.cat, loaded: true })
    })
  }
  //remove
  handleAdopt = () => {
    let type = Math.random() >= 0.5 ? 'cat' : 'dog'
    petsService.adopt(type).then(() => {
      this.updateData()
    })
  }

  handleUserAdopt = (type) => {
    petsService
      .adopt(type)
      .then(() => {
        this.setState({
          userInQueue: null,
          userAdopted: true,
          adoptedPet: this.state[type],
        })
      })
      .then(() => {
        this.updateData()
      })
  }

  handleJoinQueue = () => {
    if (!this.state.userInQueue) {
      peopleService.addPerson(this.state.userName).then((res) => {
        this.setState({
          userInQueue: this.state.userName,
        })
        this.updateData()
      })
    }
  }

  fakeIteration = () => {
    if (
      this.state.userInQueue &&
      this.state.userInQueue !== this.state.people[0]
    ) {
      //this.handleAdopt();
      if (this.state.people.length <= 6) {
        peopleService
          .addPerson(
            this.state.names[
              Math.floor(Math.random() * this.state.names.length)
            ]
          )
          .then(() => {
            setTimeout(this.handleAdopt, 2000)
          })
          .then(() => {
            this.updateData()
          })
      }
    }
  }

  handleNameChange = (e) => {
    e.preventDefault()
    this.setState({
      userName: e.target.value,
    })
  }

  componentDidMount() {
    this.updateData()
    setInterval(this.fakeIteration, 5000)
  }

  render() {
    const { people, userInQueue } = this.state
    return (
      <div>
        {this.state.userAdopted && (
          <div style={{ maxWidth: '50vw' }}>
            <h1>Congrats, you adopted:</h1>
            <Pet pet={this.state.adoptedPet} />
            <p>Please contact our office to arrange pickup. :)</p>
          </div>
        )}

        <div>
          {/* <button onClick={this.handleAdopt}>Adopt</button> */}
          {!this.state.userInQueue && (
            <>
              <span>Enter your name:</span>
              <input
                onChange={this.handleNameChange}
                value={this.state.userName}
              />
              <button onClick={this.handleJoinQueue}>Join Queue</button>
            </>
          )}
          <div className='queue'>
            <h4>Current Adoption Queue: {this.state.people.length}</h4>
            <ul>
              {people.map((person, idx) => {
                if (idx === 0)
                  return (
                    <li key={idx} style={{ fontSize: 40 }}>
                      Currently Up: {person}
                    </li>
                  )
                else if (idx < 10) return <li key={idx}>{person}</li>
                else return
              })}
            </ul>
          </div>

          <div className='pet-box'>
            {userInQueue === people[0] && (
              <button onClick={() => this.handleUserAdopt('cat')}>
                Adopt {this.state.cat.name}
              </button>
            )}
            {userInQueue === people[0] && (
              <button onClick={() => this.handleUserAdopt('dog')}>
                Adopt {this.state.dog.name}
              </button>
            )}
          </div>
          <div className='pet-box'>
            <Pet pet={this.state.cat} />
            <Pet pet={this.state.dog} />
          </div>
        </div>
      </div>
    )
  }
}

export default AdoptPage