import { FETCH_EQUIPMENT, FETCH_EQUIPMENT_2, FETCH_EQUIPMENT_3, SHOW_FILTERED, ALL_ITEMS, FETCH_VAULT, LOAD_FILTERED} from '../actions/index'

export default function EquipmentReducer(state = {equipment: [], filtered: [], allItems: [], filtered: []}, action) {
  switch(action.type){
    case FETCH_EQUIPMENT:
      return {...state, equipment: action.payload.data}
    case FETCH_EQUIPMENT_2:
      return {...state, equipment_2: action.payload.data}
    case FETCH_EQUIPMENT_3:
      return {...state, equipment_3: action.payload.data}
    case SHOW_FILTERED:
      return {...state, filtered: action.payload}
    case LOAD_FILTERED:
      return {...state, filtered: state.filtered.concat(action.payload.data)}
    case ALL_ITEMS:
      return {...state, allItems: state.allItems.concat(action.payload.data)}
    case FETCH_VAULT:
      return {...state, vault: action.payload}

    default:
      return state
  }
}
