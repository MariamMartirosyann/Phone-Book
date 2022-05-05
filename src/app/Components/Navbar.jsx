import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { style, styled } from "@mui/system";





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

/*const StyledAppBar = styled(
  AppBar,
  {}
)({
  color: "brown",
  backgroundColor: "black",
  marginBottom: "50px",
});

const StyledAppBar12 = styled(AppBar, {})({});*/ 

/*<nav className="navbar">
       
          <Link className="textDecorationNone" to="/">
            <h1>React Redux Phonebook App</h1>
          </Link>
          <br />
     
      </nav>*/