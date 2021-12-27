import React, { PureComponent } from 'react'

class Add extends PureComponent {
  inputRef = React.createRef()
  addHabit = (e) => {
    e.preventDefault()
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    this.inputRef.current.value = ''
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
