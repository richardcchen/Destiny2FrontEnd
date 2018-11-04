import React, { Component } from 'react'
import ItemList from "./ItemList"
const endpoint = "http://localhost:3000/api/v1/users"
const apiKey = process.env.REACT_APP_DESTINY2_API_KEY

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      characterIds: [],
      membershipType: -100,
      displayName: "Can't be found",
      membershipId: -100,
      currentEquipment: [],
      equipmentShow: []

    }

  }

  componentDidMount(){
    fetch("https://www.bungie.net/Platform/Destiny2/4/Profile/4611686018473254938/?components=100,104", {
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then(res => res.json())
    .then(data => {
      const characterIds = data.Response.profile.data.characterIds
      const membershipType = data.Response.profile.data.userInfo.membershipType
      const membershipId = data.Response.profile.data.userInfo.membershipId
      const displayName = data.Response.profile.data.userInfo.displayName

      this.setState({characterIds, membershipType, membershipId, displayName})
    })
  }

  getItems = () => {
    fetch(`https://www.bungie.net/Platform/Destiny2/${this.state.membershipType}/Profile/${this.state.membershipId}/Character/${this.state.characterIds[0]}/?components=201,205`, {headers: {'X-API-KEY': apiKey}})
    .then(response => response.json())
    .then(data => {

      let charEquip = data.Response.equipment.data.items.map(item => {
        return ({itemHash: item.itemHash, itemInstanceId: item.itemInstanceId, bucketHash: item.bucketHash})
      })
      const charInv = data.Response.inventory.data.items.map(item => {
        return ({itemHash: item.itemHash, itemInstanceId: item.itemInstanceId, bucketHash: item.bucketHash})
      })
      charEquip = [...charEquip, ...charInv]
      console.log("charInv:", charInv)
      console.log("charEquip", charEquip);
      this.setState({
        currentEquipment: charEquip
      })
    })
    .then(() => {
      return fetch(`http://localhost:3000/api/v1/items/getItems`, {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          items: this.state.currentEquipment,
          membershipId: this.state.membershipId
        })
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        equipmentShow: data.data
      })
    })
  }

  login = () => {
    fetch(`${endpoint}/login`,
      {
        method: "POST",
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          membershipType: this.state.membershipType,
          displayName: this.state.displayName,
          membershipId: this.state.membershipId,
          charId1: this.state.characterIds[0],
          charId2: this.state.characterIds[1],
          charId3: this.state.characterIds[2],
        })
      }
    )
  }

  render(){
    return(
      <div>
        <h3>Welcome {this.state.displayName}</h3>
        <button onClick={this.getItems}>Get Items </button>
        <button onClick={this.login}>login</button>
        <ItemList  equipmentShow={this.state.equipmentShow} />
      </div>
    )
  }

}

export default Test
