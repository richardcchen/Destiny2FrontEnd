import React, { Component } from 'react';
import { Card, Icon, Button, Label, Image, Modal, Header } from 'semantic-ui-react';
import ItemList from './ItemList'
import ItemComment from './ItemComment'
import Adapter from '../Adapter'
const bungie = 'http://www.bungie.net'


class Item extends Component {
  constructor(props){
    super(props)
    this.state = {commentOn: false}
  }

  commentOn = () => {
    this.setState({commentOn: !this.state.commentOn})
  }

  getComment = (comment) => {
    console.log("comment", comment)
    console.log("item", this.props.item);

  }

  render(){
    return(
        <Card>
          <Modal trigger={<Image src={`${bungie}${this.props.item.invObj.icon}`} />}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={`${bungie}${this.props.item.invObj.screenshot}`} />
              <Modal.Description>
                <Header>{this.props.item.invObj.name}</Header>
                <p>{this.props.item.bucketObj.name}</p>
                <p>{this.props.item.invObj.itemTypeAndTierDisplayName}</p>
                <p>{this.props.item.invObj.description}</p>
                <Button onClick={this.commentOn}>Drop a Comment!</Button>
                {(this.state.commentOn) ? <ItemComment getComment={this.getComment} />: null}
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Card.Content>
            <Card.Header>{this.props.item.invObj.name}</Card.Header>
            <Card.Meta>
              <div className='date'>{this.props.item.invObj.itemTypeAndTierDisplayName}</div>
              <div className='date'>{this.props.item.instanceObj.level}</div>
            </Card.Meta>
          </Card.Content>
        </Card>

    )
  }
}

export default Item
