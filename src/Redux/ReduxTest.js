import React from 'react';
import {Component} from 'react'
import FilterRedux from './FilterRedux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser} from '../actions/index'
import Welcome from './Welcome'
const apiKey = process.env.REACT_APP_DESTINY2_API_KEY


class ReduxTest extends Component {

  login = () => {
    this.props.fetchUser();
  }

  render(){
    console.log(this.props.user);
    return (
      <div>
        <button onClick={this.login}>login</button><br/><br/>
        {(this.props.user) ? <Welcome user={this.props.user} /> : null}
        <FilterRedux />
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUser }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(ReduxTest)
