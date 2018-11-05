import { combineReducers } from 'redux'
import UserReducer from './reducer_user'
import EquipmentReducer from './reducer_equipment'
import FilteredReducer from './reducer_filter'

const rootReducer = combineReducers({
  user: UserReducer,
  equipment: EquipmentReducer,
  filtered: FilteredReducer
})

export default rootReducer;
