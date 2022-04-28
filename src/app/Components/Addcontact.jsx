import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../redux/ContactSlice";
import Navbar from "./Navbar";

const AddContact = (props) => {
  const contact = useSelector((state) => state.contact.list);
  const [inputListEmail, setInputListEmail] = useState([]);
  const [inputListNumber, setInputListNumber] = useState([]);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }
    const data = {
      name: name,
      number: inputListNumber,
      email: inputListEmail,
    };
    console.log(data);
    dispatch(
      addContact({
        name: name,
        number: inputListNumber,
        email: inputListEmail,
      }),
      navigate("/")
    );
  };

  const handleEmailInputChange = (e, itemId) => {
    const { value } = e.target;
    const newList = inputListEmail.map((item) => {
      if(item.id === itemId){
        return {
          id:itemId,
          inputEmail: value
        }
      }
      return item
    })
    setInputListEmail(newList);
  };
  
  const handleEmailRemoveClick = (itemId) => {
    const filteredList = inputListEmail.filter((item) => item.id !== itemId)
    setInputListEmail(filteredList);
  };

  const handleEmailInputAdd = () => {
    setInputListEmail([...inputListEmail, { id: Date.now(), inputEmail: "" }]);
  };

  const handleNumberInputChange = (e, itemId) => {
    const { value } = e.target;
    const newList = inputListNumber.map((item) => {
      if(item.id === itemId){
        return {
          id:itemId,
          inputNumber: value
        }
      }
      return item
    })
    setInputListNumber(newList);
  };

  const handleNumberRemoveClick = (itemId) => {
    const filteredList = inputListNumber.filter((item) => item.id !== itemId)
    setInputListNumber(filteredList);
  };


  const handleNumberInputAdd = () => {
    setInputListNumber([...inputListNumber, { id: Date.now(), inputNumber: "" }]);
  };

  const handleNameInputChange = (e) => setName(e.target.value)

  return (
    <div>
      <Navbar />

      <div className="form">
        <h1>Add Contact</h1>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={handleNameInputChange}
            type="text"
            placeholder="name"
          />

          {inputListEmail.map((item, i) => {
            return (
              <div key={item.id}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={item.inputEmail}
                  onChange={(e) => handleEmailInputChange(e, item.id)}
                />

                <div className="btn-box">
                  {inputListEmail.length !== 1 && (
                    <button onClick={() => handleEmailRemoveClick(item.id)}>
                      Remove
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          <button onClick={handleEmailInputAdd} type="button">Add email</button><br/>
          {inputListNumber.map((item, i) => {
            return (
              <div className="box" key={item.id}>
                <input
                  
                  placeholder="Enter Number"
                  value={item.inputNumber}
                  onChange={(e) => handleNumberInputChange(e, item.id)}
                />

                <div className="btn-box">
                  {inputListNumber.length !== 1 && (
                    <button onClick={() => handleNumberRemoveClick(item.id)}>
                      Remove
                    </button>
                  )}
                  
                </div>
              </div>
            );
          })}
         
          <button type="button" onClick={handleNumberInputAdd}>Add Number</button>
                  
          <br />

          <br />
          <button type="Submit">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;

/* <input
            {...props}
            value={inputList}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <br />
          <button type="Submit" onClick={handleInputAdd}>Add Email</button>
          <button className="smallBtn"  onClick={handleRemoveClick}>Delete Email</button> <br />
          
          <br />*/
