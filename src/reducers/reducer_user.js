import { FETCH_USER, USERNAME, PASSWORD, MEMBERSHIP_TYPE, MEMBERSHIP_ID, USER_STATS, FRIENDS_LIST, FRIEND_STATS, FRIEND_OBJ, FETCH_FEED} from '../actions/index'

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
    case USER_STATS:
      return {...state, user_stats: action.payload}
    case FRIENDS_LIST:
      return {...state, friends_list: action.payload}
    case FRIEND_STATS:
      return {...state, friends_stats: action.payload}
    case FRIEND_OBJ:
      return {...state, friends_obj: action.payload}
    case FETCH_FEED:
      return {...state, feed: action.payload}
    default:
      return state
  }
}
