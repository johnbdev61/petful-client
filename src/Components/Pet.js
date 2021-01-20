import React from 'react'

export default function Pet(props) {
  const { age, breed, description, gender, imageURL, name, story } = props.pet
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageURL} />
      <h3>{description}</h3>
      <p>{story}</p>
      <h3>Breed: {breed}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Age: {age}</h3>
    </div>
  )
}
