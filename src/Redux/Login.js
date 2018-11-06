import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Form} from 'semantic-ui-react'
import SystemSelect from '../components/SystemSelect'
import { fetchUser } from '../actions/index'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      system: "none"
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onDropDownChange = (event) => {
    this.setState({
      system: event.target.textContent
    })
  }

  onSubmit = () => {
    this.props.fetchUser(this.state.username, this.state.password, this.state.system)
  }

  render() {
    console.log(this.state)
    return (
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
    )

  }
}


export default connect(null, {fetchUser})(Login)
