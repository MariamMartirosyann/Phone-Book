import React from "react";
import { deleteContact } from "../redux/ContactSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import BtnComponent from "../shared/ui/Input/BtnComponent";

const Table = () => {
  const contact = useSelector((state) => state.contact.list);

  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(deleteContact({ id: id }));
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>My Phone App</h1>
      <Grid container className="tableArea">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Emails</th>
              <th>Phones </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contact
              ? contact.map((i) => {
                  console.log(i.id);
                  return (
                    <tr key={i.id}>
                      <td>{i.id}</td>
                      <td>{i.name} </td>
                      <td>
                        {i.email.map((item) => (
                          <p key={i.id}>{item.value}</p>
                        ))}
                      </td>

                      <td>
                        {i.number.map((item) => (
                          <p key={i.id}>{item.value}</p>
                        ))}
                      </td>
                      <td>
                        <Link
                          to={`/editContact/${i.id}`}
                          className=" linkBtn textDecorationNone "
                        >
                          <BtnComponent  text={"Edit"} variant="text"/>{" "}
                        </Link>

                        <br />

                        <BtnComponent
                          text={" Delete"}
                          onClick={(e) => handleDeleteClick(i.id, e)}
                          variant="text"
                        />
                        <br />
                        <br />
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </Grid>
    </>
  );
};

export default Table;
