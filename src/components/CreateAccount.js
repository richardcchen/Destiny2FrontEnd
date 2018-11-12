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
      password2: '',
      system: "none",
      pass: "false",
      newUserId: '',
      newUserCharArray: []
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

  onSubmit = (event) => {
    event.preventDefault()
    this.errorCheck()
    Adapter.checkUserDB(this.state.username)
    .then(data => {
        if (data.data==="fail"){
          window.alert("Your username is already taken. Please enter a valid username")
        }
    })
    Adapter.getProfileName(this.state.username)
    .then(data => {
      if (data.Response.length === 0){
        window.alert("Your account was not found on Bungie. Please try again")
        console.log(this.state);
      } else {
        this.setState({newUserId: data.Response[0].membershipId})
        Adapter.getUserObj(this.state.newUserId, this.state.system)
        .then(data => {
          this.setState({newUserCharArray: data.Response.profile.data.characterIds})
        }).then(() => {
          Adapter.createUser(this.state.username, this.state.newUserId, this.state.newUserCharArray, this.state.system)
          this.setState({isClicked: true})
          window.alert("Username successfully created!")
        })

      }
    })
  }

  redirect = () => {
    if (this.state.isClicked){
      return <Redirect to="/" />
    }
  }

  errorCheck = () => {
    if (this.state.password != this.state.password2){
      window.alert("Passwords Do Not Match")
    } else if(this.state.password.length < 3){
      window.alert("Password needs to be greater than 3 characters")
    }
  }

  // Adapter.getUserObj(this.state.newUserId, this.state.system)
  // .then(data => {
  //   this.setState({newUserCharArray: data.Response.profile.data.characterIds})
  // })



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
              <input type="password" name="password2" onChange={this.onChange} placeholder='Confirm Password' />
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
