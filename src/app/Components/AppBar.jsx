import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const AppBarComponent = (props) => {
  const { color="primary", backgroundColor="secondary" } = props;
  return (
    <div>
      <AppBar >
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
