import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-red-200 align-middle justify-center p-4 items-center">
      <h1>TodoList</h1>
      <Link to="/">Home</Link> | 
      <button className=".bg-green-600"><Link to="/about"> About</Link></button>
    </header>
  )
}


// const headerStyle = {
//   background: "#333",
//   color: "#fff",
//   textAlign: "center",
//   padding: "10px"
// }

const linkStyle = {
  color:"#fff",
  textDecoration:"none"
}

export default Header;