import React, { Component } from 'react';
import { Card, Icon, Button, Label, Image, Modal, Header } from 'semantic-ui-react';
import ItemList from './ItemList'
import ItemComment from './ItemComment'
import Adapter from '../Adapter'
import { connect } from 'react-redux'
const bungie = 'http://www.bungie.net'

let style = {
  // width: "100%",
  // height: "750px",
  // overflow: 'hidden',
  backgroundColor: "#6D7979",
}

class Item extends Component {
  constructor(props){
    super(props)
    this.state = {commentOn: false}
  }

  commentOn = () => {
    this.setState({commentOn: !this.state.commentOn})
  }

  getComment = (comment) => {
    Adapter.saveComment(comment, this.props.item, this.props.user, this.props.friend)
    this.setState({commentOn: !this.state.commentOn})

  }

  render(){
    return(
        <Card>
          <Modal trigger={<Image src={`${bungie}${this.props.item.invObj.icon}`} />}>
            <Modal.Content image style={style}>
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

function mapStatetoProps(state) {
  return {
    user: state.user.userObj,
    friend: state.user.friends_obj
  }
}

export default connect(mapStatetoProps)(Item)
