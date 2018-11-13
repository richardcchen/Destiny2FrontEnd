import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Form, Grid, Image} from 'semantic-ui-react'
import SystemSelect from '../components/SystemSelect'
import { Redirect } from 'react-router-dom';
import { fetchUser } from '../actions/index'
import Adapter from '../Adapter'
import { ComponentType } from 'the-traveler/build/enums'
// 'https://geek-prime.com/wp-content/uploads/2014/02/Destiny-2-4k-hd-wallpaper-Last-city-rain-1024x576.jpg'


let sectionStyle = {
  width: "100%",
  height: "750px",
  backgroundImage: "url(https://geek-prime.com/wp-content/uploads/2014/02/Destiny-2-4k-hd-wallpaper-Last-city-rain-1024x576.jpg)",
  backgroundSize: 'cover',
  overflow: 'hidden',
}
class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      system: "none",
      isClicked: false,
      createAccount: false
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
    Adapter.checkUserDB(this.state.username, this.state.password)
    .then(data => {
      if (data.data === "fail"){
        if (data.password === "pass"){
          this.props.fetchUser(this.state.username, this.state.password, this.state.system)
          this.setState({isClicked: true})
        } else {
          window.alert("Incorrect Username and/or Password")
        }
      }
      else {
        window.alert("Incorrect Username and/or Password")
      }
    })
  }

  makeAccount = () => {
    this.setState({createAccount: true})
    if (this.state.createAccount){
      return <Redirect to="/newaccount" />
    }
  }


  render() {
    return (
    <div style={sectionStyle} >
    <Grid>
      <Grid.Column width={5}>
      </Grid.Column>
      <Grid.Column width={6}>
        <div>
          {this.redirect()}
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
        <br/>
        <br/>
          <Button onClick={this.makeAccount}>Create Account</Button>
          {(this.state.createAccount) ? <Redirect to="/newaccount" /> : null}
        </div>
      </Grid.Column>
      <Grid.Column width={5}>
      </Grid.Column>
    </Grid>
  </div>


    )
  }
}

function mapStatetoProps(state) {
  return {
    user: state.user.userObj,
    membership_type: state.user.membership_type,
    membership_id: state.user.membership_id,
  }
}

export default connect(mapStatetoProps, {fetchUser})(Login)
