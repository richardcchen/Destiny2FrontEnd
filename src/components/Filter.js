import React, {Component} from 'react'
import { Input, Form } from 'semantic-ui-react'
import ReduxTest from '../Redux/ReduxTest'

let style={
  backGroundColor:"rgba(0,0,0,0)"
}

class Filter extends Component {
  render(){
    return (
        <Input style={style} onChange={this.props.handleFilter} style={{width: '45%', fontSize: '15pt'}} size='large' icon='search' placeholder='Filter By Item Name'/>
      )
  }
}

export default Filter
