import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'


class Filter extends Component {

  // style={{width: '45%', fontSize: '15pt'}
  render(){
    return (
        <Input id="filter" style={{width: '20%', fontSize: '15pt', opacity: .5}} onChange={this.props.handleFilter}  size='large' icon='search' placeholder='Filter By Item Name'/>
      )
  }
}

export default Filter
