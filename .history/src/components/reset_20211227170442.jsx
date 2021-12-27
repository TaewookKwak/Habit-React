import React, { Component } from 'react'

class Reset extends Component {
  render() {
    return (
      <button className="resetBtn" onClick={this.props.onReset}>
        Reset All
      </button>
    )
  }
}

export default Reset
