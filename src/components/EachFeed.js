import React, {Component} from 'react'
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'

class EachFeed extends Component {

  // this.props.feed.map(eachFeed => (this.eachFeed(eachFeed)))

  eachFeed = (eachFeed) => {
    return (
      <Feed.Event key={eachFeed.comment}>
        <Feed.Content>
            <Feed.Label>
              <img src={eachFeed.iconUrl} alt="Icon"/>
          </Feed.Label>
           <Feed.Summary>
             {eachFeed.commenterName} commented on {eachFeed.itemName}
           </Feed.Summary>
            <Feed.Extra text>
              <i>{eachFeed.comment}</i>
            </Feed.Extra>
           <Feed.Meta>
           </Feed.Meta>
         </Feed.Content>
       </Feed.Event>
    )
  }

  render(){
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
