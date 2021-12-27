import React, { Component } from 'react'
import './App.css'
import Habits from './components/habits'
import Navbar from './components/navbar'
import Add from './components/add'
import Reset from './components/reset'

class App extends Component {
  state = {
    habits: [
      { name: 'Reading', count: 0, key: 0 },
      { name: 'Rynning', count: 0, key: 1 },
      { name: 'Coding', count: 0, key: 2 },
    ],
  }
  handleIncreament = (habit) => {
    //state 오브젝트 안에 있는 count 를 증가 한 뒤 state 업데이트
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits: habits })
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    const count = habits[index].count - 1
    habits[index].count = count < 0 ? 0 : count
    this.setState({ habits: habits })
  }

  handleDelete = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits.splice(index, 1)
    this.setState({ habits: habits })
  }

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ]
    this.setState({ habits: habits })
  }

  handleReset = () => {
    const habits = [...this.state.habits]
    habits.map((habit) => {
      return habit.count === 0
    })
    this.setState({ habits: habits })
  }

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habit={this.state.habits}
          handleIncreament={this.handleIncreament}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
          handleReset={this.handleReset}
        />
      </>
    )
  }
}

export default App
