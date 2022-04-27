import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../redux/ContactSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state.contact.list);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data =  {
      id: id,
      name,
      email,
      number,
    }
    dispatch(updateContact(data))
    navigate("/")
  };

  return (
    <div>
      <Navbar />
      <div className="form">
        <h1>Edit Contact {id}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <br />
          <input
            type="phoneNumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
          />
          <br />
          <button type="Submit" className="submit">
            Submit
          </button>
          <br />
          <button>
            <Link className="textDecorationNone" to="/">
              Cancel
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
