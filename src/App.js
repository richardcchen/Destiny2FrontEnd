import React, { Component } from 'react';
import './App.css';
import Test from './components/Test'
import { Route, Switch, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './Redux/Login'
import ReduxTest from './Redux/ReduxTest'
import Profile from './Redux/Profile'
import Equipment from './Redux/Equipment'

import { connect } from 'react-redux';



class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/equipment" component={Equipment} />
          </Switch>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}


export default withRouter(connect(mapStateToProps)(App));
