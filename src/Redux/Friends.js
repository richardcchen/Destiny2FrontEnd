import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import Adapter from '../Adapter'
import Search from '../components/Search'
import Stat_Table from '../components/Stat_Table'
import FriendsList from './FriendsList'
import {friendShow, loadFriendsList} from '../actions/index'



class Friends extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const urlName = Adapter.getProfileName(this.state.username)
    .then(data => {
      const searchId = data.Response[0].membershipId
      const searchSystem = data.Response[0].membershipType
      const searchdisplayName = data.Response[0].displayName
      this.props.friendShow(searchId, searchSystem)
    })
  }

  handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  addFriend = () => {
    Adapter.addFriend(this.props.user, this.props.friendObj)
    .then(() =>{
      this.props.loadFriendsList(this.props.user)
    })
  }

  render(){
    return (
      <div>
        <h1>Search For A Friend!</h1>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <br/>
        <button onClick={this.addFriend}>Add Friend </button>

        {(this.props.friendObj) ? <Stat_Table statsObj={this.props.friendStats} userObj={this.props.friendObj} /> : null}
        <FriendsList />
      </div>
    )
  }

}


function mapStatetoProps(state) {
  return {
    user: state.user.userObj,
    membership_type: state.user.membership_type,
    membership_id: state.user.membership_id,
    friendStats: state.user.friends_stats,
    friendObj: state.user.friends_obj
  }
}

export default connect(mapStatetoProps, {friendShow, loadFriendsList})(Friends)
