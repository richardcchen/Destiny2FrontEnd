import { FETCH_USER, USERNAME, PASSWORD, MEMBERSHIP_TYPE} from '../actions/index'

export default function UserReducer(state = null, action) {
  switch(action.type){
    case FETCH_USER:
      return {...state, userObj: action.payload.Response.profile.data}
    case USERNAME:
      return {...state, username: action.payload}
    case PASSWORD:
      return {...state, username: action.payload}
    case MEMBERSHIP_TYPE:
      debugger
      return {...state, username: action.payload}
    default:
      return state
  }
}
