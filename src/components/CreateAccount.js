import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import SystemSelect from '../components/SystemSelect'
import Adapter from '../Adapter'
import { Redirect } from 'react-router-dom';

class CreateAccount extends Component {
  constructor(){
    super()
    this.state = {
      isClicked: false,
      username: '',
      password: '',
      system: "none",
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
      return <Redirect to="/login" />
    }
  }

  render() {
    return (
        <div>
          {this.redirect()}
          <h4>Please Enter Your Information</h4>
          <Form id="login-form" onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Username</label>
              <input name="username" onChange={this.onChange} placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" name="password" onChange={this.onChange} placeholder='Password' />
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

export default CreateAccount
