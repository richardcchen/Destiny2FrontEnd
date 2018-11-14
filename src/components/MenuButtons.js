import React, { Component } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'
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

// style = {check ? {display:"none"} : null}
// <Segment inverted style={{}}>
//     <Menu inverted pointing secondary>
//       <NavLink exact to="/profile">
//         <Menu.Item
//           style={{color: 'red'}}
//           name='profile'
//           active={activeItem === 'http://localhost:3001/profile'}
//           onClick={this.handleItemClick}
//         />
//       </NavLink>
//     <NavLink exact to="/equipment">
//       <Menu.Item
//         name='equipment'
//         active={activeItem === 'http://localhost:3001/equipment'}
//         onClick={this.handleItemClick}
//       />
//     </NavLink>
//     <NavLink exact to="/friends">
//       <Menu.Item
//         name='friends'
//         active={activeItem === 'http://localhost:3001/friends'}
//         onClick={this.handleItemClick}
//       />
//     </NavLink>
//     <Menu.Item
//         name='logout'
//         active={activeItem === 'logout'}
//         onClick={this.handleItemClick}
//       />
//     </Menu>
//   </Segment>



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
