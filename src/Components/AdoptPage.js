import React, { Component } from 'react'
import AppContext from '../context'
import PetCard from './PetCard'
import AdoptLine from './AdoptLine'
import PeopleService from '../services/people-service'
import DogService from '../services/dog-service'
import CatService from '../services/cat-service'
import Queue from '../services/queue'
import Congratulations from './Congratulations'
import './AdoptPage.css'

class AdoptPage extends Component {
  static contextType = AppContext

  componentDidMount() {
    this.context.clearCurrDog()
    this.context.clearCurrCat()
    this.context.clearError()
    this.context.clearQueue()

    this.interval = setInterval(this.cyclePeople.bind(this), 1500)
    Promise.all([
      CatService.getCat(),
      DogService.getDog(),
      PeopleService.getPeople(),
    ])
      .then((res) => {
        this.context.setCurrDog(res[0])
        this.context.setCurrCat(res[0])
        let peopleQueue = new Queue()
        res[2].forEach((person) => peopleQueue.enqueue(person))
        this.context.setQueue(peopleQueue)
      })
      .catch((error) => console.error(error))
  }
  cyclePeople = () => {
    if (this.context.person !== this.context.queue.first.value) {
      let odds = Math.floor(Math.random() * 100)
      if (odds < 50) {
        this.handleDogClick()
      } else {
        this.handleCatClick()
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderQueue() {
    return (
      <AdoptLine
        queue={this.context.queue}
      />
    )
  }

  handleDogClick = () => {
    return DogService.deleteDog()
      .then(res => {
        let owner = this.context.queue.dequeue()
        res.owner = owner
        this.context.setAdopted(res)
      })
      .then(res => {
        DogService.getDog().then(res => this.context.setCurrDog(res))
        this.setState({ nowAdopting: this.context.queue.first.value })
      })
  }

  handleCatClick = () => {
    return CatService.deleteCat()
      .then(res => {
        let owner = this.context.queue.dequeue()
        res.owner = owner
        this.context.setAdopted(res)
      })
      .then(res => {
        CatService.getCat().then(res => this.context.setCurrCat(res))
        this.setState({ nowAdopting: this.context.queue.first.value })
      })
  }

  renderDog() {
    return (
      <PetCard
        pet={this.context.currDog}
        petType={'dog'}
        handleAdoptClick={this.handleDogClick}
      />
    )
  }

  renderCat() {
    return (
      <PetCard
        pet={this.context.currCat}
        petType={'cat'}
        handleAdoptClick={this.handleCatClick}
      />
    )
  }

  render() {
    const petAdopted = this.context.adopted.map((pet, index) => (
      <div className='congrats' key={index}>
        <Congratulations
        imgSrc={pet.imageURL}
        name={pet.name}
        owner={pet.owner}
        />
      </div>
    ))
    return (
      <>
        <div className='adopt-header'>
          <h1>Choose Your Next Best Friend!</h1>
        </div>
        <div className='center'>
          <div>
            <h2 className='next-pet'>Puppies</h2>
            {this.renderDog()}
          </div>
          <div>
            <h2 className='next-pet'>Kitties</h2>
            {this.renderCat()}
          </div>
        </div>
        {this.context.queue.first.next ? this.renderQueue() : 'Loading...'}
        <div>
          <hr />
          <h2 className='congrats'>Congrats on Your New Bestie!</h2>
          {petAdopted}
        </div>
      </>
    )
  }
}

export default AdoptPage