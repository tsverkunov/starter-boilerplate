import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const clientAPI = {
  getClients() {
    return axios.get(`${BASE_URL}users`)
      .catch(err => console.log(err))
  },
  getClient(id) {
    return axios.get(`${BASE_URL}users/${id}`)
      .catch(err => console.log(err))
  },
}
