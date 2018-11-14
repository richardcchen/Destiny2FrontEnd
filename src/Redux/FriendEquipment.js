import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import { fetchFriendEquipment, showFiltered} from '../actions/index'
import FriendItemList from '../components/FriendItemList'
import Filter from '../components/Filter'
import Loading from '../components/Loading'


class FriendEquipment extends Component {


  // componentDidMount(){
  //   this.props.fetchEquipment(this.props.user, this.props.membership_id, this.props.membership_type)
  // }

  // handleFilter = (event) => {
  //   const filteredEquipment = this.props.allItems.filter(item => {
  //     return item.invObj.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   })
  //   this.props.showFiltered(filteredEquipment)
  // }

  render(){
    return (
      <div id="friend-equipment">
        {(this.props.friend_equipment_1.length !== 0) ? <FriendItemList  /> : <Loading/>}
      </div>
    )
  }


}

function mapStatetoProps(state) {
  return {
    friend_equipment_1: state.equipment.friend_equipment_1,
    friend_equipment_2: state.equipment.friend_equipment_2,
    friend_equipment_3: state.equipment.friend_equipment_3,
  }
}

export default connect(mapStatetoProps, {fetchFriendEquipment, showFiltered})(FriendEquipment)
