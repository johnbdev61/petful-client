import React, { Component } from 'react'

const AppContext = React.createContext({
  currDog: {},
  currCat: {},
  queue: [],
  people: [],
  person: '',
  adopted: [],
  error: null,

  setCurrDog: () => {},
  clearCurrDog: () => {},

  setCurrCat: () => {},
  clearCurrCat: () => {},

  setQueue: () => {},
  clearQueue: () => {},

  setPeople: () => {},
  clearPeople: () => {},

  setPerson: () => {},
  clearPerson: () => {},

  setAdopted: () => {},
  clearAdopted: () => {},

  setError: () => {},
  clearError: () => {},

  randomPet: () => {},

  cyclePets: () => {},
})

export class AppContextProvider extends Component {
  state = {
    currDog: {},
    currCat: {},
    queue: null,
    people: [],
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

  setPeople = (people) => {
    this.setState({ people })
  }

  clearPeople = () => {
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

  setError = (error) => {
    console.log(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  randomPet = () => {
    let random = Math.floor(Math.random() * 100)
    if (random < 50) {
      this.handleAdoptDog()
    } else {
      this.handleAdoptCat()
    }
  }

  cyclePets = () => {
    if (this.context.person !== this.context.queue.first.value) {
      setTimeout(function () {
        this.randomPet()
      }, 5000)
    }
  }
   render() {
    const value = {
      currDog: this.state.currentDog,
      currCat: this.state.currCat,
      queue: this.state.queue,
      people: this.state.people,
      person: this.state.person,
      adopted: this.state.adopted,
      error: this.state.error,
      setCurrDog: this.setCurrDog,
      clearCurrDog: this.clearCurrDog,
      setCurrCat: this.setCurrCat,
      clearCurrCat: this.clearCurrCat,
      setQueue: this.setQueue,
      clearQueue: this.clearQueue,
      setPeople: this.setPeople,
      clearPeople: this.clearPeople,
      setPerson: this.setPerson,
      clearPerson: this.clearPerson,
      setAdopted: this.setAdopted,
      clearAdopted: this.clearAdopted,
      setError: this.setError,
      clearError: this.clearError,
      randomPet: this.randomPet,
      cyclePets: this.cyclePets,
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext
