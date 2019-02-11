import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUser, fetchEquipment, showFiltered} from '../actions/index'
import ItemList from '../components/ItemList'
import Filter from '../components/Filter'
import Loading from '../components/Loading'



class Equipment extends Component {


  componentDidMount(){
    if (this.props.user){
      this.props.fetchEquipment(this.props.user, this.props.membership_id, this.props.membership_type)
    }
  }

  handleFilter = (event) => {
    const filteredEquipment = this.props.allItems.filter(item => {
      return item.invObj.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.props.showFiltered(filteredEquipment)
  }

  render(){
    return (
      <div id="equipment">
        {(this.props.equipment.length !== 0) ? <ItemList  /> : <Loading/> }
      </div>
    )
  }

}


function mapStatetoProps(state) {
  return {
    equipment: state.equipment.equipment,
    equipment_2: state.equipment.equipment_2,
    equipment_3: state.equipment.equipment_3,
    filtered: state.equipment.filtered,
    user: state.user.userObj,
    username: state.user.username,
    membership_type: state.user.membership_type,
    membership_id: state.user.membership_id,
    allItems: state.equipment.allItems,
    vault: state.equipment.vault

  }
}

export default connect(mapStatetoProps, {fetchEquipment, showFiltered})(Equipment)
