import config from '../config'

const DogService = {
getDog() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
}

export default DogService
