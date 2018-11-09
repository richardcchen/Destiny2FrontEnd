import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Form} from 'semantic-ui-react'
import SystemSelect from '../components/SystemSelect'
import { Redirect } from 'react-router-dom';
import { fetchUser } from '../actions/index'
import Adapter from '../Adapter'
import { ComponentType } from 'the-traveler/build/enums'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      system: "none",
      isClicked: false
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onDropDownChange = (event, obj) => {
    this.setState({
      system: obj.value
    })
  }

  redirect = () => {
    if (this.state.isClicked){
      return <Redirect to="/profile" />
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.fetchUser(this.state.username, this.state.password, this.state.system)
    this.setState({isClicked: true})
  }



  render() {
    return (
      <div>
        {this.redirect()}
        <Form id="login-form" onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Username</label>
            <input name="username" onChange={this.onChange} placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="password" onChange={this.onChange} placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <SystemSelect onChange={this.onDropDownChange}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}


export default connect(null, {fetchUser})(Login)
