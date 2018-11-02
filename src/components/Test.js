import React, { Component } from 'react'
const endpoint = "http://localhost:3000/api/v1/notes"
const apiKey = process.env.REACT_APP_DESTINY2_API_KEY

class Test extends Component {

  componentDidMount(){
    // fetch(endpoint)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)})
    fetch("https://www.bungie.net/Platform/Destiny2/4/Profile/4611686018473254938/?components=100,104", {
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then(res => res.json())
    .then(data => {
      const characterIds = data.Response.profile.data.characterIds
      console.log("CharacterIds:", characterIds);
    })
    fetch(endpoint)


  }

  render(){
    return(
      <div>
        <h3>Inside Test Component</h3>
      </div>
    )
  }

}

export default Test
