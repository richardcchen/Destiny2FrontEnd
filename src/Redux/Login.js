import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Form, Grid, Image} from 'semantic-ui-react'
import SystemSelect from '../components/SystemSelect'
import { Redirect } from 'react-router-dom';
import { fetchUser } from '../actions/index'
import Adapter from '../Adapter'
import { ComponentType } from 'the-traveler/build/enums'
import ReactRevealText from 'react-reveal-text'




let style = {
  color: '#8c7055'
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

  onSubmit = (event) => {
    event.preventDefault()
    Adapter.checkUserDB(this.state.username, this.state.password, this.state.system)
    .then(data => {
      if (data.data === "fail"){
        if (data.password === "pass"){
          this.props.fetchUser(this.state.username, this.state.password, this.state.system)
          //history.push here
          console.log(this.props);
          this.props.history.push('/profile')
          // this.setState({isClicked: true})
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
    <div id="login" >
    <Grid >
      <Grid.Column width={5}>
      </Grid.Column>
      <Grid.Column width={6}>
        <div>
          <Form id="login-form" onSubmit={this.onSubmit}>
            <Form.Field>
              <label style={style}>Username</label>
              <input name="username" onChange={this.onChange} placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label style={style}>Password</label>
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
