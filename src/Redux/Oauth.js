import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Form} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import Adapter from '../Adapter'
import Traveler from 'the-traveler'
import { ComponentType } from 'the-traveler/build/enums'

const traveler = new Traveler({
    apikey: '49519f8010794e44849099ed264ea631',
    userAgent: 'supaf1yz', //used to identify your request to the API
    oauthClientId: '25336',
    oauthClientSecret: 'q.g2gLzU0-dns3P0NADPFHfWuXrPZf-XCqObNyad72Y',
    debug: true
})



export default class Oauth extends Component {

  getToken = () => {
    const hereComesTheCode = "8ed488170ecd776bd8fcbc2cd1728111"
    traveler.getAccessToken(hereComesTheCode).then(oauth => {
    // Provide your traveler object with the oauth object. This is later used for making authenticated calls
    traveler.oauth = oauth;})
    .catch(err => {console.log(err)})
  }

  render(){
    return(
      <div>
        <h1>Oauth</h1>
        <Button as="a" href="http://localhost:3000/api/v1/users/login">Get Access</Button>
        <Button onClick={this.getToken}>getToken</Button>
      </div>
    )
  }
}
