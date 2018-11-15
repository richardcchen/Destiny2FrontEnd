import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Tab, Button } from 'semantic-ui-react';
import Item from "./Item"
import Filter from "./Filter"

class ItemList extends Component {
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


  // handleFilter = (event) => {
  //   const filteredEquipment = this.props.allItems.filter(item => {
  //     return item.invObj.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   })
  //   this.props.showFiltered(filteredEquipment)
  // }

render(){
  const panes = [
    { menuItem: 'Character 1', render: () =>
      (this.props.equipment) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.equipment).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'Character 2', render: () =>
      (this.props.equipment_2) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.equipment_2).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'Character 3', render: () =>
      (this.props.equipment_3) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.equipment_3).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'Vault', render: () =>
      (this.props.vault) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.vault.data).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'All', render: () =>
      (this.props.allItems) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.filterArray(this.props.allItems).map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },

  ]
  return(
    <div>
      <div id="profile-filter">
        <Filter id="filter" handleFilter={this.handleFilter}/>
      </div>
      <Tab id="tab" menu={{ pointing: true, style: {opacity: .5, width: '35%'} }} panes={panes} />
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
    allItems: state.equipment.allItems,
    vault: state.equipment.vault
  }
}

export default connect(mapStatetoProps)(ItemList)
