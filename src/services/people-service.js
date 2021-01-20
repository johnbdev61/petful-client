import config from '../config'

const peopleService = {
  getPeople() {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/people`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  addPerson(person) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ person: person }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
}

export default peopleService