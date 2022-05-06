import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import BtnComponent from "../ui/button";

const Addbtn = () => {
  return (
    <>
      <Grid container className="addContact">
        <Link className="textDecorationNone addBtn" to="/addContact">
          {" "}
          <BtnComponent text={"Add Contact"} />{" "}
        </Link>
      </Grid>
    </>
  );
};

export default Addbtn;
