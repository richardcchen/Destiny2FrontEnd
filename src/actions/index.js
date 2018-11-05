import axios from 'axios'
const apiKey = process.env.REACT_APP_DESTINY2_API_KEY

export const FETCH_USER = 'FETCH_USER'
// url = `https://www.bungie.net/Platform/Destiny2/4/Profile/4611686018473254938/?components=100,104&X-API-KEY=${apiKey}`

export function fetchUser() {
  const request = axios.get("https://www.bungie.net/Platform/Destiny2/4/Profile/4611686018473254938/?components=100", {
    headers: {
      'X-API-KEY': apiKey
    }
  })
  return {
    type: FETCH_USER,
    payload: request
  }
}
