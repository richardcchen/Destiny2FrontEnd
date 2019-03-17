import React, { Component } from 'react'
import { connect } from 'react-redux'
import StatTable from './StatTable'


class Stats extends Component {
  render(){
    return (
      <div>
        {(this.props.user_stats) ? <StatTable id="stat-table" statsObj={this.props.user_stats} userObj={this.props.userObj} /> : null}
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
