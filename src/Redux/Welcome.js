import React, {Component} from 'react'
import ReduxTest from "./ReduxTest"


const Welcome = (props) => {

  const characterIds = () => {
    return (props.user.characterIds.map(character => {
      return(<p key={character}>{character}</p>)
    }))
  }

  return (
    <div>
      <h1>Welcome {props.user.userInfo.displayName}</h1>
      <h4>Membership Id: {props.user.userInfo.membershipId}</h4>
      <p>Character Ids: </p>
      <div>{characterIds()}</div>

    </div>
  )
}

export default Welcome
