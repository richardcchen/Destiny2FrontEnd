import { FETCH_EQUIPMENT} from '../actions/index'

export default function EquipmentReducer(state = {equipment: []}, action) {
  switch(action.type){
    case FETCH_EQUIPMENT:
      return {...state, equipment: action.payload.data}
    default:
      return state
  }
}
