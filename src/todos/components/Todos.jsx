import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import Header from './Header'
import { filters } from '../dataFlows'

const TODO_FILTERS = {
  [filters.SHOW_ALL]: () => true,
  [filters.SHOW_ACTIVE]: todo => !todo.completed,
  [filters.SHOW_COMPLETED]: todo => todo.completed
}

class Todos extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: filters.SHOW_ALL }
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted()
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <div className="todoapp">
        <Header addTodo={actions.addTodo} />
        <section className="main">
          {this.renderToggleAll(completedCount)}
          <ul className="todo-list">
            {filteredTodos.map(todo =>
              <TodoItem key={todo._id} todo={todo} {...actions} />
            )}
          </ul>
          {this.renderFooter(completedCount)}
        </section>
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Todos
