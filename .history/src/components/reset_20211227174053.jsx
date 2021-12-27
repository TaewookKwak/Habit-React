import React, { PureComponent } from 'react'

class Reset extends PureComponent {
  render() {
    console.log('reset')
    return (
      <button className="resetBtn" onClick={this.props.onReset}>
        Reset All
      </button>
    )
  }
}

export default Reset
