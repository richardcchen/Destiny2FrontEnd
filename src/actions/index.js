import axios from 'axios'
import Adapter from "../Adapter"
const apiKey = process.env.REACT_APP_DESTINY2_API_KEY

export const FETCH_USER = 'FETCH_USER'
export const FETCH_EQUIPMENT = 'FETCH_EQUIPMENT'
export const FETCH_EQUIPMENT_2 = 'FETCH_EQUIPMENT_2'
export const FETCH_EQUIPMENT_3 = 'FETCH_EQUIPMENT_3'
export const FETCH_VAULT = 'FETCH_VAULT'
export const SHOW_FILTERED = 'SHOW_FILTERED'
export const ALL_ITEMS = 'ALL_ITEMS'
export const USERNAME = 'USERNAME'
export const PASSWORD = 'PASSWORD'
export const MEMBERSHIP_TYPE = 'MEMBERSHIP_TYPE'
export const MEMBERSHIP_ID = "MEMBERSHIP_ID"
export const CHARACTER_IDS = "CHARACTER_IDS"
export const LOAD_FILTERED = 'LOAD_FILTERED'
export const USER_STATS = 'USER_STATS'


export function fetchUser(username, password, system) {
  return (dispatch) => {
    const urlUsername = encodeURIComponent(username)
    dispatch({type: USERNAME, payload: urlUsername})
    dispatch({type: PASSWORD, payload: password})
    dispatch({type: MEMBERSHIP_TYPE, payload: system})
    fetch(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${urlUsername}/`, {
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      const id = data.Response[0].membershipId
      dispatch({type: MEMBERSHIP_ID, payload: id})
      return id
    })
    .then(id => {
      Adapter.getProfileInfo(id, system)
      .then(data => {
        dispatch({type: USER_STATS, payload: data.Response})
      })
      return (fetch(`https://www.bungie.net/Platform/Destiny2/${system}/Profile/${id}/?components=100`, {
        headers: {
          'X-API-KEY': apiKey
        }
      }))
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: FETCH_USER, payload: data })
    })
  }
}

export function addUser(userObj){
  debugger
}

export function fetchEquipment(userObj, id, type){
  return (dispatch) => {
        Adapter.getCharItems(0, userObj, id, type)
        .then(equipShow => {
          dispatch({ type: FETCH_EQUIPMENT, payload: equipShow})
          dispatch({ type: LOAD_FILTERED, payload: equipShow})
          dispatch({ type: ALL_ITEMS, payload: equipShow})
        })
        Adapter.getCharItems(1, userObj, id, type)
        .then(equipShow => {
          dispatch({ type: FETCH_EQUIPMENT_2, payload: equipShow})
          dispatch({ type: LOAD_FILTERED, payload: equipShow})
          dispatch({ type: ALL_ITEMS, payload: equipShow})
        })
        Adapter.getCharItems(2, userObj, id, type)
        .then(equipShow => {
          dispatch({ type: FETCH_EQUIPMENT_3, payload: equipShow})
          dispatch({ type: LOAD_FILTERED, payload: equipShow})
          dispatch({ type: ALL_ITEMS, payload: equipShow})
        })
        Adapter.getVaultItems(id, type)
        .then(equipShow => {
          if (equipShow) {
            dispatch({ type: FETCH_VAULT, payload: equipShow})
            dispatch({ type: ALL_ITEMS, payload: equipShow})
            dispatch({ type: LOAD_FILTERED, payload: equipShow})
          }
        })

  }
}

export function showFiltered(equipment){
  return (dispatch) => {
    dispatch({type: SHOW_FILTERED, payload: equipment})
  }
}
