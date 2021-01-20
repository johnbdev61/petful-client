import React, { Component } from 'react'

const AppContext = React.createContext({
  currDog: {},
  currCat: {},
  queue: [],
  users: [],
  person: '',
  adopted: [],
  error: null,

  setCurrDog: () => {},
  clearCurrDog: () => {},

  setCurrCat: () => {},
  clearCurrCat: () => {},

  setQueue: () => {},
  clearQueue: () => {},

  setUsers: () => {},
  clearUsers: () => {},

  setPerson: () => {},
  clearPerson: () => {},

  setAdopted: () => {},
  clearAdopted: () => {},

  setError: () => {},
  clearError: () => {},

  randomPet: () => {},

  cycleList: () => {},
})

export class AppContextProvider extends Component {
  state = {
    dog: {},
    cat: {},
    queue: [],
    users: [],
    person: '',
    adopted: [],
    error: null,
  }

  setCurrDog = (currDog) => {
    this.setState({ currDog })
  }

  clearCurrDog = () => {
    this.setState({ currDog: {} })
  }

  setCurrCat = (currCat) => {
    this.setState({ currCat })
  }

  clearCurrCat = () => {
    this.setState({ currCat: {} })
  }

  setQueue = (queue) => {
    this.setState({ queue })
  }

  clearQueue = () => {
    this.setState({ queue: null })
  }

  setUsers = (users) => {
    this.setState({ users })
  }

  clearUsers = () => {
    this.setState({ users: [] })
  }

  setPerson = (person) => {
    this.setState({ person })
  }

  clearPerson = () => {
    this.setState({ person: '' })
  }

  setAdopted = (adopted) => {
    this.setState({ adopted: [...this.state.adopted, adopted] })
  }

  clearAdopted = () => {
    this.setState({ adopted: [] })
  }

  randomPet = () => {
    let random = Math.floor(Math.random() * 100)
    if (random < 50) {
      this.handleAdoptDog()
    } else {
      this.handleAdoptCat()
    }
  }

  cycleList = () => {
    if (this.context.person !== this.context.queue.first.value) {
      setTimeout(function () {
        this.randomPet()
      }, 5000)
    }
  }
}

export default AppContext
