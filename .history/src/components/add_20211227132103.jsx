import React, { Component } from 'react'

class Add extends Component {
  addHabit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(habit)
  }
  render() {
    const habit = this.props.habit
    return (
      <div className="addHabit">
        <form className="addHabit-textBox" onSubmit={this.addHabit}>
          <input type="text" placeholder="Habit" required></input>
          <button className="addHabit-addBtn">Add</button>
        </form>
      </div>
    )
  }
}

export default Add
