import Axios from 'axios'

export const pokeApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 3000
})

export const sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/danielf/pokemon',
  timeout: 3000
})
