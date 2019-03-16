import React from 'react'

let style = {
  color: '#585877'
}

const Welcome = (props) => {


  return (
    <div style={style}>
      <h1 id="welcome">Welcome {props.user.userInfo.displayName}</h1>

    </div>
  )
}

export default Welcome
