import React, {Component} from 'react'
import { Input, Form } from 'semantic-ui-react'

class Search extends Component {
  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <input type="text" onChange={this.props.handleChange} placeholder="enter username" />
            </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
  }
}

export default Search
