import React, {Component} from 'react'
import ReduxTest from "./ReduxTest"

const Welcome = (props) => {
  console.log(props);

  const characterIds = () => {
    console.log(props);
    return (props.user.characterIds.map(character => {
      return(<p>{character}</p>)
    }))
  }

  return (
    <div>
      <h1>Welcome {props.user.userInfo.displayName}</h1>
      <h4>Membership Id: {props.user.userInfo.membershipId}</h4>
      <p>Character Ids: </p>
      <p>{characterIds()}</p>

    </div>
  )
}

export default Welcome
