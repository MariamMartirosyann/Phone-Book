import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../redux/ContactSlice";
import Navbar from "./Navbar";

const Addcontact = (props) => {
  const contact = useSelector((state) => state.contact.list);
  const [inputList, setInputList] = useState( [{ input: "" }]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !number.trim) {
      return;
    }
    dispatch(
      addContact({
        name: name,
        number: number,
        email: email,
      }),
      navigate("/")
    );
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleInputRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleInputAdd = () => {
    setInputList([...inputList, { input: "" }]);
  };
  return (
    <div>
      <Navbar />

      <div className="form">
        <h1>Add Contact</h1>

        <form onSubmit={handleSubmit}>
          <input
            {...props}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <br />
          
          <input
            {...props}
            value={inputList}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <br />
          <button type="Submit" onClick={handleInputAdd}>Add Email</button>
          <button className="smallBtn"  onClick={handleInputRemove}>Delete Email</button> <br />
          
          <br />
         
          <input
            {...props}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="phoneNumber"
            placeholder="Phone Number"
          />
          <br />
          <button type="Submit"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Addcontact;
