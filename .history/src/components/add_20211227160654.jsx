import React, { Component } from 'react'

class Add extends Component {
  addHabit = (e) => {
    inputRef = React.createRef()
    e.preventDefault()
    console.log(this.inputRef.current.value)l
  }
  render() {
    return (
      <div className="addHabit">
        <form className="addHabit-textBox" onSubmit={this.addHabit}>
          <input
            type="text"
            placeholder="Habit"
            required
            ref={this.inputRef}
          ></input>
          <button className="addHabit-addBtn">Add</button>
        </form>
      </div>
    )
  }
}

export default Add
