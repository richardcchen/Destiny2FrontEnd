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

    static createUser(username, newUserId, newUserCharArray, system, pw){
      fetch(`http://localhost:3000/api/v1/users/createuser`, {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({username, newUserId, newUserCharArray, system, pw})
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
      // try{
      //   test = userObj.characterIds
      // }
      // catch(error){
      //   return "something"
      // }
      if(userObj)
        {
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
      else {
        return "{}"
      }
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

    static searchManifest2(items, id, system){
      // debugger
      return (fetch(`http://localhost:3000/api/v1/items/getVault`, {
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
        if(data.ErrorCode !== 1){
          return {}
        }
        else if(data.Response.profileInventory.data){
          return (data.Response.profileInventory.data.items)
        } else {
          return {}
        }
      })
      .then(equipment => {
        if (JSON.stringify(equipment) === "{}"){
          return "{}"
        } else {
          return (this.searchManifest2(equipment, id, type))
        }
      })
      .then(res => {
        if (res !== "{}"){
          return res.json()
        }
      })
    )
  }

  static saveComment(comment, item, user, owner){
    return (fetch(`http://localhost:3000/api/v1/items/leaveComment`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({comment, item, user, owner})
    }))
  }

  static fetchFeed(id){
    return fetch(`http://localhost:3000/api/v1/users/feed`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({id})
    }).then(res =>res.json())
  }

  static checkUserDB(username, pw){
    return fetch(`http://localhost:3000/api/v1/users/checkuser`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({username, pw})
    }).then(res =>res.json())
  }

} //end of class


export default Adapter
