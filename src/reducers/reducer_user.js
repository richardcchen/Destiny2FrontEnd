import { FETCH_USER} from '../actions/index'

export default function UserReducer(state = null, action) {
  switch(action.type){
    case FETCH_USER:
      return action.payload.Response.profile.data
    default:
      return state
  }
}
