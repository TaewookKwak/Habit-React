import React, { Component } from 'react'

class Add extends Component {
  addHabit = (e) => {
    e.preventDefault()
  }
  render() {
    const habit = this.props.habit
    console.log(habit)
    return (
      <div className="addHabit">
        <form className="addHabit-textBox">
          <input
            type="text"
            placeholder="Habit"
            required
            onSubmit={this.addHabit}
          ></input>
          <button className="addHabit-addBtn">Add</button>
        </form>
      </div>
    )
  }
}

export default Add
