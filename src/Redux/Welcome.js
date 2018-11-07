import React, {Component} from 'react'
import ReduxTest from "./ReduxTest"


const Welcome = (props) => {


  return (
    <div>
      <h1>Welcome {props.user.userInfo.displayName}</h1>

    </div>
  )
}

export default Welcome
