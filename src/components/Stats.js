import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
import Profile from '../Redux/Profile'
import Adapter from '../Adapter'
import { connect } from 'react-redux'
import Stat_Table from './Stat_Table'

let style = {
  // width: "100%",
  // height: "750px",
  // overflow: 'hidden',
  backGroundColor: "transparent",
  opacity: 0
}


class Stats extends Component {



  render(){
    return (
      <div>
        {(this.props.user_stats) ? <Stat_Table id="stat-table" statsObj={this.props.user_stats} userObj={this.props.userObj} /> : null}
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    user_stats: state.user.user_stats,
    userObj: state.user.userObj
  }
}

export default connect(mapStatetoProps)(Stats)
