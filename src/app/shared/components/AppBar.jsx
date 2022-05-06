import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const AppBarComponent = () => {

  return (
    <div>
      <AppBar style={{
        background: '#0f0f0f', padding: "15px",
        marginBottom: "100px"
      }} >
        <Toolbar >
          <Link className="textDecorationNone" to="/">
            <h1>React Redux Phonebook App</h1>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
