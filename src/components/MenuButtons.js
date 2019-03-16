import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';




class MenuButtons extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    // debugger
    if (e.target.innerText === "Logout"){
      window.location.href = "http://localhost:3001/"
    }
  }


 profile = () => {
   this.props.history.push('/profile')
 }

  render() {
    const activeItem = window.location.href
    return (
    <Button.Group>
      <Button onClick={this.profile}>Profile</Button>
      <Button onClick={this.equipment}>Equipment</Button>
      <Button onClick={this.friends}>Friends</Button>
      <Button onClick={this.logout}>Logout</Button>
    </Button.Group>


    )
  }
}

export default MenuButtons
