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

// style = {check ? {display:"none"} : null}

  render() {
    const activeItem = window.location.href
    const check = this.props.hist.location.pathname === "/"
    // console.log("check:", check);
    console.log("historypath", this.props.hist.location.pathname);
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
        <NavLink exact to="/itemfeed">
          <Menu.Item
            name='itemfeed'
            active={activeItem === 'http://localhost:3001/feed'}
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
        <NavLink exact to="/friends">
          <Menu.Item
            name='friends'
            active={activeItem === 'http://localhost:3001/friends'}
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
