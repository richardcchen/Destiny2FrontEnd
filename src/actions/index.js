import axios from 'axios'
const apiKey = process.env.REACT_APP_DESTINY2_API_KEY

export const FETCH_USER = 'FETCH_USER'
export const FETCH_EQUIPMENT = 'FETCH_EQUIPMENT'
export const SHOW_FILTERED = 'SHOW_FILTERED'
  const membershipType = "4"
  const membershipId = "4611686018473254938"


export function fetchUser() {
  return (dispatch) => { fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=100`, {
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: FETCH_USER, payload: data })
    })
  }
}

export function fetchEquipment(userObj){
  return (dispatch) => {
        let allcharEquip = []
        const membershipType = "4"
        const membershipId = "4611686018473254938"
        const charIds = userObj.characterIds
        fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${charIds[0]}/?components=201,205`, {headers: {'X-API-KEY': apiKey}})
        .then(res => res.json())
        .then(data => {
          return allcharEquip = [...data.Response.inventory.data.items, ...data.Response.equipment.data.items]
        })
        .then(equipment => {
          return (
            fetch(`http://localhost:3000/api/v1/items/getItems`, {
              method: 'POST',
              headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
              },
              body: JSON.stringify({
                items: equipment
              })
          })
        )})
        .then(res => res.json())
        .then(equipShow => {
          dispatch({ type: FETCH_EQUIPMENT, payload: equipShow})
        })
  }
}

export function showFiltered(equipment){
  return (dispatch) => {
    dispatch({type: SHOW_FILTERED, payload: equipment})
  }
}
