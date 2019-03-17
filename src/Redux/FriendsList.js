import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import {List} from 'semantic-ui-react'
import { loadFriendsList, friendShow} from '../actions/index'



class FriendsList extends Component {

  showFriend = (friend) => {
    this.props.friendShow(friend.membershipId, friend.system)
  }

  render(){
    return (
      <div>
        {(this.props.user) ? <h1 style={{color: 'purple', fontSize: '20pt'}}><u>Fire Team</u></h1> : null}
        <List>
          {(this.props.friends_list) ?  this.props.friends_list.map(friend => <List.Item key={friend.displayName} style={{color: 'brown', fontSize: '30pt'}} as='a' onClick={(event) => this.showFriend(friend)}>{friend.displayName}</List.Item>) : null}
        </List>
      </div>
    )
  }

}


function mapStatetoProps(state) {
  return {
    user: state.user.userObj,
    membership_type: state.user.membership_type,
    membership_id: state.user.membership_id,
    friends_list: state.user.friends_list
  }
}

export default connect(mapStatetoProps, {loadFriendsList, friendShow})(FriendsList)
