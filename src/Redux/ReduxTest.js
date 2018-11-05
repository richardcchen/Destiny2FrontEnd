import React from 'react';
import {Component} from 'react'
import FilterRedux from './FilterRedux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, fetchEquipment, showFiltered} from '../actions/index'
import ItemList from '../components/ItemList'
import Welcome from './Welcome'
import Filter from '../components/Filter'

const apiKey = process.env.REACT_APP_DESTINY2_API_KEY



class ReduxTest extends Component {
  constructor(props){
    super()
    this.state = {
      filteredEquipment: {}
    }
  }

  login = () => {
    this.props.fetchUser()
  }

  fetchEquipment = () => {
    this.props.fetchEquipment(this.props.user)
    this.props.showFiltered(this.props.equipment)
  }

  handleFilter = (event) => {
    const filteredEquipment = this.props.equipment.filter(item => {
      return item.invObj.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.props.showFiltered(filteredEquipment)
    console.log("filtered", this.props.filtered.filtered);
  }


  render(){
    console.log("redux equipment", this.props.equipment);
    return (
      <div>
        <button onClick={this.login}>login</button><br/><br/>
        <button onClick={this.fetchEquipment}>Get Equipment</button><br/><br/>
        <Filter handleFilter={this.handleFilter}/>
        {(this.props.user) ? <Welcome user={this.props.user} /> : null}
        {(this.props.equipment) ? <ItemList equipmentShow={this.props.filtered}/> : null}
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    user: state.user,
    equipment: state.equipment.equipment,
    filtered: state.filtered.filtered
  }
}


export default connect(mapStatetoProps, {fetchUser, fetchEquipment, showFiltered})(ReduxTest)
