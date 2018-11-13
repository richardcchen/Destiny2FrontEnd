import React, { Component } from 'react';
import './App.css';
import Test from './components/Test'
import { Route, Switch, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './Redux/Login'
import ReduxTest from './Redux/ReduxTest'
import Profile from './Redux/Profile'
import Equipment from './Redux/Equipment'
import ItemFeed from './Redux/ItemFeed'
import Oauth from './Redux/Oauth'
import Friends from './Redux/Friends'
import CreateAccount from './components/CreateAccount'
import { connect } from 'react-redux';
import {createBrowserHistory} from 'history'

const hist = createBrowserHistory()




class App extends Component {

  render() {
    return (
      <div>
        <div>
          {(this.props.username) ? <NavBar hist={hist} /> : null}
          <Switch>
            <Route hist={hist} exact path="/" component={Login} />
            <Route hist={hist} exact path="/profile" component={Profile} />
            <Route hist={hist} exact path="/itemfeed" component={ItemFeed} />
            <Route hist={hist} exact path="/equipment" component={Equipment} />
            <Route hist={hist} exact path="/friends" component={Friends} />
            <Route exact path="/Oauth" component={Oauth} />
            <Route hist={hist} exact path="/newaccount" component={CreateAccount} />
          </Switch>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}


export default withRouter(connect(mapStateToProps)(App));
