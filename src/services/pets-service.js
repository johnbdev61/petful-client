import config from '../config'

const petsService = {
  getPets() {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/pets`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  adopt(type) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/pets`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ type: type }),
    }).then((res) => {
      console.log(res.ok)
      return !res.ok ? (e) => Promise.reject(e) : res.ok
    })
  },
}

export default petsService
