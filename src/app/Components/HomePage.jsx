import React from "react";
import Addbtn from "../Components/Addbtn";
import Navbar from "../Components/Navbar";
import Table from "../Components/Table";
import AppBarComponent from "../Components/AppBar";
import "../../App.css";

const HomePage = () => {
  return (
    <div>
   <AppBarComponent/>
      <Addbtn />
      <Table />
    </div>
  );
};

export default HomePage;
