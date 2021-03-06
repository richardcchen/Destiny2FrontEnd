import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import {fetchFeed} from '../actions/index'
import EachFeed from '../components/EachFeed'


class ItemFeed extends Component {

  componentDidMount(props){
    this.props.fetchFeed(this.props.userId)
  }


  render(){
    return (
      <div>
        {(this.props.feed) ? <h1 id="fire-team-chat">Fire Team Chat</h1> : null}
        {(this.props.feed) ? <EachFeed/> : null}
      </div>
    )
  }



}



function mapStatetoProps(state) {
  return {
    userId: state.user.membership_id,
    feed: state.user.feed
  }
}

export default connect(mapStatetoProps, {fetchFeed})(ItemFeed)
