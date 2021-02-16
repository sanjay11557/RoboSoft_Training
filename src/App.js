import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

class App extends Component {
  state ={
      todos: [
          {id:1, content:'Make notes'},
          {id:2, content:'Complete 1 tutorial'}
      ]
  }
  deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
          return todo.id !== id
      });
      this.setState({
           todos
      });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
        todos
    });
  }
  render() {
    return (
      <div className='todo-app container'>
          <h1 className='center blue-text'>Todo's:</h1>
          <TodoList todos={ this.state.todos } deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
