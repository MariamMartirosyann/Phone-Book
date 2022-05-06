import React from "react";
import Addbtn from "../../shared/components/Addbtn";
import Table from "../../shared/components/Table";
import AppBarComponent from "../../shared/components/AppBar";
import "../../../App.css";

const HomePage = () => {
  return (
    <div>
      <AppBarComponent />
      <Addbtn />
      <Table />
    </div>
  );
};

export default HomePage;
