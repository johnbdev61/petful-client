import config from '../config'

const CatsService = {
  getCat() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
}

export default CatsService
