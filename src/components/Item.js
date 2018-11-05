import React, { Component } from 'react';
import { Card, Icon, Button, Label, Image, Modal, Header } from 'semantic-ui-react';
import ItemList from './ItemList'
const bungie = 'http://www.bungie.net'

class Item extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <Card>

          <Image src={`${bungie}${this.props.item.invObj.icon}`} />
          <Card.Content>
            <Card.Header>{this.props.item.invObj.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{this.props.item.invObj.itemTypeAndTierDisplayName}</span>
            </Card.Meta>
          </Card.Content>


          <Modal trigger={<Button>Get More Info</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={`${bungie}${this.props.item.invObj.screenshot}`} />
            <Modal.Description>
                <Header>{this.props.item.invObj.name}</Header>
                <p>{this.props.item.bucketObj.name}</p>
                <p>{this.props.item.invObj.itemTypeAndTierDisplayName}</p>
                <p>{this.props.item.invObj.description}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card>

    )
  }
}

export default Item
