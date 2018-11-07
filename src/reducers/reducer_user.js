import { FETCH_USER, USERNAME, PASSWORD, MEMBERSHIP_TYPE, MEMBERSHIP_ID} from '../actions/index'

export default function UserReducer(state = {}, action) {
  switch(action.type){
    case FETCH_USER:
      return {...state, userObj: action.payload.Response.profile.data}
    case USERNAME:
      return {...state, username: action.payload}
    case PASSWORD:
      return {...state, password: action.payload}
    case MEMBERSHIP_TYPE:
      return {...state, membership_type: action.payload}
    case MEMBERSHIP_ID:
      return {...state, membership_id: action.payload}
    default:
      return state
  }
}
