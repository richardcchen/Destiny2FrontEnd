import { FETCH_USER} from '../actions/index'

export default function(state = null, action) {
  switch(action.type){
    case FETCH_USER:
      return action.payload.data.Response.profile.data
  }
  return state
}
