import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    // debugger
    if (e.target.innerText === "Logout"){
      window.location.href = "http://localhost:3001/"
    }
  }

  render() {
    const activeItem = window.location.href

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <NavLink exact to="/profile">
            <Menu.Item
              name='profile'
              active={activeItem === 'http://localhost:3001/profile'}
              onClick={this.handleItemClick}
            />
          </NavLink>
        <NavLink exact to="/equipment">
          <Menu.Item
            name='equipment'
            active={activeItem === 'http://localhost:3001/equipment'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}

export default NavBar
