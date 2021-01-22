import config from '../config'

const PeopleService = {
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
  addPerson(person) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ person: person }),
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
}

export default PeopleService
