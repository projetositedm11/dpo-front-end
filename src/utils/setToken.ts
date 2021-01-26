import api from '../services/api'

// make this after set the token in local storage
const token = (): void => {
  if (localStorage.getItem('token')) {
    api.defaults.headers.common.Authorization = JSON.parse(localStorage.getItem('token'))
  } else {
    delete api.defaults.headers.common.Authorization
  }
}

export default token
