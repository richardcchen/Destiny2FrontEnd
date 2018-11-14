import React, {Component} from 'react'
import { Input, Form } from 'semantic-ui-react'
import ReduxTest from '../Redux/ReduxTest'

let style={
  opacity: .5
}

class Filter extends Component {

  // style={{width: '45%', fontSize: '15pt'}
  render(){
    return (
        <Input id="filter" style={{width: '20%', fontSize: '15pt', opacity: .5}} onChange={this.props.handleFilter}  size='large' icon='search' placeholder='Filter By Item Name'/>
      )
  }
}

export default Filter
