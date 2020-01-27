import React, { Component } from 'react';
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ""});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
        type="text" 
        name="title" 
        style={{ padding: "5px"}}
        placeholder="Add todo..." 
        value={this.state.title}
        onChange={this.onChange}
      />
      <input 
        type="submit"
        value="Submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-1 px-3 rounded"
      />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired

}
export default AddTodo
