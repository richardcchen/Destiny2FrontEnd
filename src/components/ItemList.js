import React, { Component } from 'react'
import Test from "./Test.js"
import { Card, Icon, Button, Label } from 'semantic-ui-react';
import Item from "./Item"

class ItemList extends Component {
  constructor(props){
    super(props)
  }

render(){
  console.log(this.props);
  return(
    <div>
      <Card.Group id="items" itemsPerRow={8}>
        {this.props.equipmentShow.map(item => <Item item={item}/>)}
      </Card.Group>
    </div>
  )
}

}

export default ItemList
