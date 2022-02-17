import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getProducts(perPage, page) {
    return apiClient
      .get('/items?_limit=' + perPage + '&_page=' + page)
      .then(sleeper(2000))
  },
  getProduct(id) {
    return apiClient.get('/items/' + id).then(sleeper(2000))
  },
}

function sleeper(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms))
  }
}
