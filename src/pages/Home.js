import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }

  onInputChange(input) {
    this.setState({ input })
  }

  render() {
    return (
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="What's on your mind?"
          value={this.state.input}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default Home
