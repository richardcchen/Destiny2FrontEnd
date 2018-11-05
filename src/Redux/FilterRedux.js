import React, {Component} from 'react'
import { Input, Form } from 'semantic-ui-react'
import ReduxTest from './ReduxTest'

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = { term: ''}
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }


  render(){
    // console.log(this.props);
    return (
        <Input value={this.state.term} onChange={this.onInputChange} style={{width: '45%', fontSize: '15pt'}} size='large' icon='search' placeholder='Search...'/>
      )
  }
}

export default Filter
