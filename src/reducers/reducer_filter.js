import { SHOW_FILTERED} from '../actions/index'

export default function FilteredReducer(state = {filtered: []}, action) {
  switch(action.type){
    case SHOW_FILTERED:
      return {...state, filtered: action.payload}
    default:
      return state

  }
}
