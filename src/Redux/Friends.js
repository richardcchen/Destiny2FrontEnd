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


let sectionStyle = {
  width: "100%",
  height: "750px",
  backgroundImage: "url(http://hdqwalls.com/wallpapers/destiny-2-osiris-avenement-m3.jpg)",
  backgroundSize: 'cover',
  overflow: 'hidden',
}

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

  handleStats = () => {
    this.setState({view: true})
  }

  handleEquipment = () => {
    this.setState({view: false})
  }

  render(){
    return (
      <div style={sectionStyle}>
        <Grid>
          <Grid.Column width={12}>
            <h1>Search For A Guardian</h1>
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            <br/>
            <br/>
            {(this.state.searched)? <button onClick={this.addFriend}>Add to Fireteam </button> : null}
            <br/>
            <br/>
            <div class="ui buttons">
              <button onClick={this.handleStats} class="ui button">Stats</button>
              <div class="or"></div>
              <button onClick={this.handleEquipment} class="ui button">Equipment</button>
            </div>
            {(this.state.view) ?
              ((this.props.friendObj) ? <Stat_Table statsObj={this.props.friendStats} userObj={this.props.friendObj} /> : null)
              :
              <FriendEquipment />}
          </Grid.Column>
          <FriendsList />
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
