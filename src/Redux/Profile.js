import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import Stats from '../components/Stats'
import {Grid, Button} from 'semantic-ui-react'
import Adapter from '../Adapter'
import ItemFeed from './ItemFeed'
import MenuButtons from '../components/MenuButtons'

let style = {
  "padding-left": "5rem"
}

class Profile extends Component {


  render(){
    return (
      <div id="profile">
        <Grid>
          <Grid.Column style={style} width={10}>
            {(this.props.user) ? <Welcome user={this.props.user} /> : null}
            {<Stats type={this.props.type} id={this.props.id}/>}
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={4}>
            <div id="item-feed">
              <ItemFeed />
            </div>
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
  }
}

export default connect(mapStatetoProps)(Profile)
