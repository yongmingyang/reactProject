import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import Proptypes from "prop-types";

class Todos extends Component {
  markComplete = () => {

  }

	render() {
    // this.props is called here as the variable of completed lies in this.state of App.js instead of Todos.js
    // therefore parsing the function call up to App.js instead.
		return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo}
     markComplete = {this.props.markComplete}
     delTodo = {this.props.delTodo}/>
    ));
	}
}

// Proptypes
// proptypes are basically a validation of what kind of 
// data type a component should have
Todos.propTypes = {
  todos: Proptypes.array.isRequired,
  markComplete: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired

}

export default Todos;
