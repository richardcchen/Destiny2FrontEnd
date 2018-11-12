import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Tab } from 'semantic-ui-react';
import Item from "./Item"
import Filter from "./Filter"

class FriendItemList extends Component {
  constructor(){
    super()
    this.state = {
      filterWord: ""
    }
  }

handleFilter = (event) => {
  this.setState({filterWord: event.target.value})
}

filterArray = (itemArray) => {
  return (itemArray.filter(item => {
    return item.invObj.name.toLowerCase().includes(this.state.filterWord.toLowerCase())
  }))
}


render(){
  const panes = [
    { menuItem: 'Character 1', render: () =>
      (this.props.friend_equipment_1) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.friend_equipment_1).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'Character 2', render: () =>
      (this.props.friend_equipment_2) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.friend_equipment_2).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'Character 3', render: () =>
      (this.props.friend_equipment_3) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.friend_equipment_3).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'All', render: () =>
      (this.props.friend_all_items) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.friend_all_items).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },

  ]
  return(
    <div>
      <Filter handleFilter={this.handleFilter}/>
      <Tab menu={{ pointing: true }} panes={panes} />
    </div>
  )
}

}

function mapStatetoProps(state) {
  return {
    friend_equipment_1: state.equipment.friend_equipment_1,
    friend_equipment_2: state.equipment.friend_equipment_2,
    friend_equipment_3: state.equipment.friend_equipment_3,
    friend_filtered: state.equipment.friend_filtered,
    friend_all_items: state.equipment.friend_all_items,
  }
}

export default connect(mapStatetoProps)(FriendItemList)
