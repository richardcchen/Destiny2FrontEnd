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
export const FRIENDS_LIST = 'FRIENDS_LIST'
export const FRIEND_OBJ = 'FRIEND_OBJ'
export const FRIEND_STATS = 'FRIEND_STATS'
export const FRIEND_EQUIPMENT_1 = 'FRIEND_EQUIPMENT_1'
export const FRIEND_EQUIPMENT_2 = 'FRIEND_EQUIPMENT_2'
export const FRIEND_EQUIPMENT_3 = 'FRIEND_EQUIPMENT_3'
export const FRIEND_FILTERED = 'FRIEND_FILTERED'
export const FRIEND_ALL_ITEMS = 'FRIEND_ALL_ITEMS'
export const CLEAR_FRIEND = 'CLEAR_FRIEND'
export const FETCH_FEED = 'FETCH_FEED'

export function fetchUser(username, password, system) {
  return (dispatch) => {
    const urlUsername = encodeURIComponent(username)
    dispatch({type: USERNAME, payload: urlUsername})
    dispatch({type: PASSWORD, payload: password})
    dispatch({type: MEMBERSHIP_TYPE, payload: system})
    Adapter.getProfileName(username)
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
      Adapter.fetchFeed(id)
      .then(data => {
        dispatch({type: FETCH_FEED, payload: data.data})
      })
      return (Adapter.getUserObj(id, system))
    })
    .then(data => {
      dispatch({ type: FETCH_USER, payload: data })
      return (data.Response.profile.data)
      })
    .then(userObj => {
      Adapter.updateUser(userObj)
      return (Adapter.getFriends(userObj))
      })
      .then(data => {
        dispatch({type: FRIENDS_LIST, payload: data.data})
      })
  }
}

export function fetchFeed(id){
  return (dispatch) => {
      Adapter.fetchFeed(id)
        .then(data => {
          dispatch({type: FETCH_FEED, payload: data.data})
        })
  }
}

export function loadFriendsList(userObj){
  return(dispatch) => {
    Adapter.getFriends(userObj)
    .then(data => {
      dispatch({type: FRIENDS_LIST, payload: data.data})
    })
  }
}

export function friendShow(id, system){
  return (dispatch) => {
    Adapter.getProfileInfo(id, system)
    .then(data => {
      dispatch({type: FRIEND_STATS, payload: data.Response})
      return (Adapter.getUserObj(id, system))
    })
    .then(data => {
      if (data.Response === undefined){
        window.alert("Account does not exist!")
        return {}
      }
      dispatch({type:FRIEND_OBJ, payload: data.Response.profile.data})
      const friendObj = data.Response.profile.data
      const friendId = friendObj.userInfo.membershipId
      const friendSystem = friendObj.userInfo.membershipType
      const numOfChars = friendObj.characterIds.length
      dispatch({ type: CLEAR_FRIEND})
      Adapter.getCharItems(0, friendObj, friendId, friendSystem)
      .then(equipShow => {
        dispatch({ type: FRIEND_EQUIPMENT_1, payload: equipShow})
        dispatch({ type: FRIEND_FILTERED, payload: equipShow})
        dispatch({ type: FRIEND_ALL_ITEMS, payload: equipShow})
      })
      if (numOfChars > 1){
        Adapter.getCharItems(1, friendObj, friendId, friendSystem)
        .then(equipShow2 => {
          dispatch({ type: FRIEND_EQUIPMENT_2, payload: equipShow2})
          dispatch({ type: FRIEND_FILTERED, payload: equipShow2})
          dispatch({ type: FRIEND_ALL_ITEMS, payload: equipShow2})

        })
      } else {
        dispatch({ type: FRIEND_EQUIPMENT_2, payload: {}})
      }
      if (numOfChars > 2){
        Adapter.getCharItems(2, friendObj, friendId, friendSystem)
        .then(equipShow3 => {
          dispatch({ type: FRIEND_EQUIPMENT_3, payload: equipShow3})
          dispatch({ type: FRIEND_FILTERED, payload: equipShow3})
          dispatch({ type: FRIEND_ALL_ITEMS, payload: equipShow3})
        })
      } else {
        dispatch({ type: FRIEND_EQUIPMENT_3, payload: {}})
      }
    })
  }
}

export function fetchEquipment(userObj, id, type){
  return (dispatch) => {
    return (
        Adapter.getVaultItems(id, type)
        .then(equipShow => {
          if (equipShow) {
            dispatch({ type: FETCH_VAULT, payload: equipShow})
            dispatch({ type: ALL_ITEMS, payload: equipShow})
            dispatch({ type: LOAD_FILTERED, payload: equipShow})
        }})
        .then(() => {
          Adapter.getCharItems(0, userObj, id, type)
          .then(equipShow => {
          if (equipShow){
            dispatch({ type: FETCH_EQUIPMENT, payload: equipShow})
            dispatch({ type: LOAD_FILTERED, payload: equipShow})
            dispatch({ type: ALL_ITEMS, payload: equipShow})
          }})
        }).then(() => {
          if (userObj.characterIds.length > 1) {
            Adapter.getCharItems(1, userObj, id, type)
            .then(equipShow => {
              dispatch({ type: FETCH_EQUIPMENT_2, payload: equipShow})
              dispatch({ type: LOAD_FILTERED, payload: equipShow})
              dispatch({ type: ALL_ITEMS, payload: equipShow})
            })
          }
        }).then(() => {
          if (userObj.characterIds.length > 2) {
            Adapter.getCharItems(2, userObj, id, type)
            .then(equipShow => {
              dispatch({ type: FETCH_EQUIPMENT_3, payload: equipShow})
              dispatch({ type: LOAD_FILTERED, payload: equipShow})
              dispatch({ type: ALL_ITEMS, payload: equipShow})
            })
          }
    })
  )}
}

export function fetchFriendEquipment(friendObj, id, type){
  return (dispatch) => {
    return (
          Adapter.getCharItems(1, friendObj, id, type)
          .then(equipShow => {
            dispatch({ type: FETCH_EQUIPMENT_2, payload: equipShow})
            dispatch({ type: LOAD_FILTERED, payload: equipShow})
            dispatch({ type: ALL_ITEMS, payload: equipShow})
          }).then(() => {
          Adapter.getCharItems(2, friendObj, id, type)
          .then(equipShow => {
            dispatch({ type: FETCH_EQUIPMENT_3, payload: equipShow})
            dispatch({ type: LOAD_FILTERED, payload: equipShow})
            dispatch({ type: ALL_ITEMS, payload: equipShow})
          })
        }).then(() => {
          Adapter.getCharItems(0, friendObj, id, type)
          .then(equipShow => {
            dispatch({ type: FETCH_EQUIPMENT, payload: equipShow})
            dispatch({ type: LOAD_FILTERED, payload: equipShow})
            dispatch({ type: ALL_ITEMS, payload: equipShow})
          })
    })
  )}
}



export function showFiltered(equipment){
  return (dispatch) => {
    dispatch({type: SHOW_FILTERED, payload: equipment})
  }
}
