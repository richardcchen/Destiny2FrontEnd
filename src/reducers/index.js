import { combineReducers } from 'redux'
import UserReducer from './reducer_user'
import EquipmentReducer from './reducer_equipment'

const rootReducer = combineReducers({
  user: UserReducer,
  equipment: EquipmentReducer
})

export default rootReducer;
