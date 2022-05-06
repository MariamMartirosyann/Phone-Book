import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="textDecorationNone" to="/">
          <h1>React Redux Phonebook App</h1>
        </Link>
        <br />
      </nav>
    </>
  );
};

export default Navbar;
