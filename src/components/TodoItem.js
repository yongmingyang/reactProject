import React, { Component } from 'react'
import Proptypes from "prop-types";


export class TodoItem extends Component {
  getStyle = () => {
    return{
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ?
      "line-through" : "none"
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* this parses the id up to todos.js which then gets parsed on to App.js */}
          {/* this.props is parsed down from todos.js */}
          <input className="bg-yellow-100 text-black" type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
           {" "}
          {title}
          <button className="bg-red-400 text-white py-0 px-1 rounded float-right" onClick={this.props.delTodo.bind(this, id)}>Delete</button>
        </p>
      </div>
    )
  }
}


TodoItem.propTypes = {
  todo: Proptypes.object.isRequired
}

// const btnStyle = {
//   background: "#ff0000",
//   color: "#fff",
//   border: "none",
//   padding: "5px 8px",
//   borderRadius: "50%",
//   cursor: "pointer",
//   float: "right"
// }


TodoItem.propTypes = {
  todo: Proptypes.object.isRequired,
  markComplete: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired
}

export default TodoItem
