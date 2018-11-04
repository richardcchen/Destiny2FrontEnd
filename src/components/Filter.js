import React, {Component} from 'react'
import { Input, Form } from 'semantic-ui-react'
import Test from './Test'

class Filter extends Component {
  render(){
    // console.log(this.props);
    return (
        <Input onChange={this.props.handleFilter} style={{width: '45%', fontSize: '15pt'}} size='large' icon='search' placeholder='Search...'/>
      )
  }
}

export default Filter
