import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react';
// import ItemList from './Item'

class ItemComment extends Component {
  constructor(props){
    super(props)
    this.state = {
      comment: ""
    }
  }

  onSubmit = (event, obj) => {
    event.preventDefault()
    this.props.getComment(this.state.comment)
  }

  onChange = (event, obj) => {
    this.setState({comment: obj.value})
  }

  render(){

    return (
      <form class='ui form'>
        <TextArea onChange={this.onChange} placeholder='Comment' />
        <Button onClick={this.onSubmit}>Submit</Button>
      </form>
    )
  }

}

export default ItemComment
