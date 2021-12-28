import React, { memo } from 'react'

const Add = memo((props) => {
  const inputRef = React.createRef()
  const addHabit = (e) => {
    e.preventDefault()
    const name = inputRef.current.value
    name && props.onAdd(name)
    inputRef.current.value = ''
  }
  console.log('add')
  return (
    <div className="addHabit">
      <form className="addHabit-textBox" onSubmit={addHabit}>
        <input type="text" placeholder="Habit" ref={inputRef}></input>
        <button className="addHabit-addBtn">Add</button>
      </form>
    </div>
  )
})

export default Add
