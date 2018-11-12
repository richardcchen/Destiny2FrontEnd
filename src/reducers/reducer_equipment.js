import { FETCH_EQUIPMENT, FETCH_EQUIPMENT_2, FETCH_EQUIPMENT_3, SHOW_FILTERED, ALL_ITEMS, FETCH_VAULT, LOAD_FILTERED, FRIEND_EQUIPMENT_1, FRIEND_EQUIPMENT_2, FRIEND_EQUIPMENT_3, FRIEND_FILTERED, FRIEND_ALL_ITEMS, CLEAR_FRIEND} from '../actions/index'

export default function EquipmentReducer(state = {equipment: [], filtered: [], allItems: [], filtered: [], friend_filtered: [], friend_all_items: []}, action) {
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
    case FRIEND_EQUIPMENT_1:
      return {...state, friend_equipment_1: action.payload.data}
    case FRIEND_EQUIPMENT_2:
      return {...state, friend_equipment_2: action.payload.data}
    case FRIEND_EQUIPMENT_3:
      return {...state, friend_equipment_3: action.payload.data}
    case FRIEND_FILTERED:
      return {...state, friend_filtered: state.friend_filtered.concat(action.payload.data)}
    case FRIEND_ALL_ITEMS:
        return {...state, friend_all_items: state.friend_all_items.concat(action.payload.data)}
      case CLEAR_FRIEND:
          return {...state, friend_all_items: [], friend_filtered: [], friend_equipment_1: [], friend_equipment_2: [], friend_equipment_3: [] }

    default:
      return state
  }
}
