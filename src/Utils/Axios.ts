import axios from 'axios'

export const API = () => {
  return axios.create({
    baseURL: 'http://localhost:3000',
  })
}

export function GET(path: string) {
  API()
    .get(path)
    .then((res) => {
      res
    })
}
