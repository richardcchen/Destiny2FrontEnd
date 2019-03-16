import React, {Component} from 'react'

class Search extends Component {
  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <input style={{width: '30%', fontSize: '25pt', opacity: .5}} type="text" onChange={this.props.handleChange} placeholder="enter username" />
            </label>
          <input id="search-btn" type="submit" value="Submit" />
        </form>
      </div>
      )
  }
}

export default Search
