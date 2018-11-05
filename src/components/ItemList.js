import React, { Component } from 'react'
import Test from "./Test.js"
import { Card, Tab } from 'semantic-ui-react';
import Item from "./Item"

class ItemList extends Component {
  constructor(props){
    super(props)
  }

render(){
  const panes = [
    { menuItem: 'Character 1', render: () =>
      (this.props.equipmentShow) ?
        <Card.Group id="items" itemsPerRow={8}>
          {this.props.equipmentShow.map(item => <Item item={item}/>)}
        </Card.Group>
        :
        null
    },
    { menuItem: 'Character 2', render: () => <p>Character 2</p> },
  ]
  return(
    <div>
      <Tab menu={{ pointing: true }} panes={panes} />
    </div>
  )
}

}

export default ItemList
