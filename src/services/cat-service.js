import config from '../config'

const CatsService = {
  getCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
  deleteCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    )
  },
}

export default CatsService
