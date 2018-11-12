import React, {Component} from 'react'
import { Feed, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class EachFeed extends Component {

  // this.props.feed.map(eachFeed => (this.eachFeed(eachFeed)))

  eachFeed = (eachFeed) => {
    return (
      // <Feed.Event>
      //   <Feed.Summary>
      //     <Feed.User style={{fontSize: "15px"}}>{eachFeed.commenterName}</Feed.User>
      //   </Feed.Summary>
      //   <Feed.Extra images><img class="resize" src={eachFeed.itemUrl}/></Feed.Extra>
      // </Feed.Event>
<Feed.Event>
  <Feed.Content>
      <Feed.Label>
        <img src={eachFeed.iconUrl}/>
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
