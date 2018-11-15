import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Grid} from 'semantic-ui-react'
import Adapter from '../Adapter'
import Search from '../components/Search'
import Stat_Table from '../components/Stat_Table'
import FriendsList from './FriendsList'
import FriendEquipment from './FriendEquipment'
import {friendShow, loadFriendsList, fetchFriendEquipment} from '../actions/index'



class Friends extends Component {
  constructor(props){
    super(props)
    this.state = {searched: false, view: true}
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({searched: true})
    const urlName = Adapter.getProfileName(this.state.username)
    .then(data => {
      if (JSON.stringify(data.Response) === "[]"){
        window.alert("Sorry this username was not found")
      }
      else {
        const searchId = data.Response[0].membershipId
        const searchSystem = data.Response[0].membershipType
        const searchdisplayName = data.Response[0].displayName
        this.props.friendShow(searchId, searchSystem)
      }
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

  handleStats = () => {
    this.setState({view: true})
  }

  handleEquipment = () => {
    this.setState({view: false})
  }

  render(){
    return (
      <div id="friends">
        <Grid id="friends-grid">
          <Grid.Column id="friend-col-1" width={13}>
            {(this.props.user) ? <h1 style={{color: "purple"}}>Search For A Guardian</h1> : null}
            {(this.props.user) ? <Search id="search" handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> : null}
            <br/>
            <br/>
            {(this.state.searched) ? <button onClick={this.addFriend}>Add to Fireteam </button> : null}
            <br/>
            <br/>
            {(this.props.friendStats) ? <div id="toggle-friend-button" class="ui buttons">
              <button onClick={this.handleStats} class="ui button">Stats</button>
              <div class="or"></div>
              <button onClick={this.handleEquipment} class="ui button">Equipment</button>
            </div> : null}
            {(this.state.view) ?
              ((this.props.friendObj) ? <Stat_Table id="friend-stats" statsObj={this.props.friendStats} userObj={this.props.friendObj} /> : null)
              :
              <FriendEquipment />}
          </Grid.Column>
          <Grid.Column id="friend-col-2" width={3}>
            <FriendsList />
          </Grid.Column>
        </Grid>
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

export default connect(mapStatetoProps, {friendShow, loadFriendsList, fetchFriendEquipment})(Friends)
