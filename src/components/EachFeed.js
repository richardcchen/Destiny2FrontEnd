import React, {Component} from 'react'
import { Feed, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class EachFeed extends Component {

  // this.props.feed.map(eachFeed => (this.eachFeed(eachFeed)))

  eachFeed = (eachFeed) => {
    return (
      <Feed.Event>
        <Feed.User style={{fontSize: "15px"}}>{eachFeed.commenterName}</Feed.User>
        <Feed.Extra images><img class="resize" src={eachFeed.itemUrl}/></Feed.Extra>
      </Feed.Event>
    )
  }

  render(){
    console.log("feed", this.props);
    return (
      <Feed>
        {this.props.feed.map(eachFeed => (this.eachFeed(eachFeed)))}
      </Feed>
    )
  }
}

function mapStatetoProps(state) {
  return {
    feed: state.user.feed
  }
}

export default connect(mapStatetoProps)(EachFeed)
