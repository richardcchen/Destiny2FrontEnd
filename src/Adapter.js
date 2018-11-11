const apiKey = process.env.REACT_APP_DESTINY2_API_KEY

class Adapter {
  static getProfileName(username){
    const urlUsername = encodeURIComponent(username)
    return (
      fetch(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${urlUsername}/`, {
        headers: {
          'X-API-KEY': apiKey
        }}).then(response => response.json())
      )
    }

    static getProfileInfo(id, type) {
      return (
        fetch(`https://www.bungie.net/Platform/Destiny2/${type}/Account/${id}/Stats/`, {headers: {'X-API-KEY': apiKey}})
        .then(res => res.json())
      )
    }

    static getUserObj(id, system){
      return (
        fetch(`https://www.bungie.net/Platform/Destiny2/${system}/Profile/${id}/?components=100`, {
          headers: {
            'X-API-KEY': apiKey
          }
        }).then(res => res.json())
      )
    }



    static updateUser(userObj){
      fetch(`http://localhost:3000/api/v1/users/login`, {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({userObj})
      })
    }

    static addFriend(userObj, friendObj){
      return(
      fetch(`http://localhost:3000/api/v1/users/addFriend`, {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({userObj, friendObj})
      }))
    }

    static getFriends(userObj){
        return ( fetch(`http://localhost:3000/api/v1/users/getFriends`, {
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({userObj})
        }).then(res => res.json())
      )
    }



    static receivedToken(){
      fetch(`http://localhost:3000/api/v1/users/receivedToken`)
    }

    static getCharItems(char_num, userObj, id, type){
      const charIds = userObj.characterIds
      return (
      fetch(`https://www.bungie.net/Platform/Destiny2/${type}/Profile/${id}/Character/${charIds[char_num]}/?components=201,205`, {headers: {'X-API-KEY': apiKey}})
      .then(res => res.json())
      .then(data => {
        if (data.Response.inventory.data){
          return [...data.Response.inventory.data.items, ...data.Response.equipment.data.items]
        } else {
          return data.Response.equipment.data.items
        }
      })
      .then(equipment => {
        return (
          this.searchManifest(equipment, id, type)
      )})
      .then(res => res.json()))
    }

    static searchManifest(items, id, system){
      return (fetch(`http://localhost:3000/api/v1/items/getItems`, {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({items, id, system})
      }))
    }



  static getVaultItems(id, type){
    return (
      fetch(`https://www.bungie.net/Platform/Destiny2/${type}/Profile/${id}/?components=102`, {headers: {'X-API-KEY': apiKey}})
      .then(res => res.json())
      .then(data => {
        if(data.Response.profileInventory.data){
          return (data.Response.profileInventory.data.items)
        } else {
          return {}
        }
      })
      .then(equipment => {
        if (JSON.stringify(equipment) === "{}"){
          return "{}"
        } else {
          return (this.searchManifest(equipment, id, type))
        }
      })
      .then(res => {
        if (res !== "{}"){
          return res.json()
        }
      })
    )
  }



} //end of class


export default Adapter
