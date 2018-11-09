import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import Stats from '../components/Stats'
import {Button} from 'semantic-ui-react'
import Adapter from '../Adapter'



class Profile extends Component {



  render(){
    return (
      <div>
        {(this.props.user) ? <Welcome user={this.props.user} /> : null}
        {<Stats type={this.props.type} id={this.props.id}/>}
      </div>
    )
  }

}


function mapStatetoProps(state) {
  return {
    user: state.user.userObj,
    membership_type: state.user.membership_type,
    membership_id: state.user.membership_id,
  }
}

export default connect(mapStatetoProps)(Profile)
