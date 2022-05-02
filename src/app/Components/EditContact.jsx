import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../redux/ContactSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();

  const contacts = useSelector((state) => state.contact.list);
  const selectedContact = contacts.find(item => item.id == id)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
    setValue
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  const onSubmit = (formData) => {
    const newFormData = {
      id:id,
      name: formData.name,
      email: [{ id:selectedContact.email[0].id,inputEmail: formData.email }],
      number: [{ id:selectedContact.number[0].id, inputNumber: formData.number }],
    };
    console.log(newFormData);
    dispatch(updateContact(newFormData));
    navigate("/");
  };
  useEffect(() => {
    if(selectedContact){
      reset({
        name:selectedContact.name,
        email:selectedContact.email[0].inputEmail,
        number:selectedContact.number[0].inputNumber
      });
    }
    
  }, []);

  return (
    <div>
      <Navbar />
      <div className="form">
        <h1>Edit Contact {id}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">name</label>
          <Controller
            control={control}
            name="name"
            rules={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 5,
                message: "Input more then 5 letters",
              },
            }}
            render={({ field }) => <input {...field} />}
          />

          {errors?.name?.message && <p>{errors.name.message}</p>}  <br />
          <button type="button" onClick={()=>{
            setValue("name","currentContact.name")
          }}>Set Value</button>

          <br />
          <label htmlFor="email">Email</label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: {
                value: true,
                message: "required",
              },
              maxLength: {
                value: 20,
                message: "Input less then 20 letters",
              },
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors?.email?.message && <p>{errors.email.message}</p>}

          <br />
          <label htmlFor="number">Number</label>
          <Controller
            control={control}
            name="number"
            rules={{
              required: {
                value: true,
                message: "required",
              },
             
              pattern: {
                value: /[1-9][0-9]*|0/g,
                message: "Enter only number",
              },
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors?.number?.message && <p>{errors.number.message}</p>}
          <br />
          <input type="submit" /><br/>

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

/* <div className="form">
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
      </div>*/

/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />

          {inputListEmail.map((item, i) => {
            return (
              <div key={item.id}>
                <input
                  type="email"
                  placeholder="Email"
                  value={item.inputEmail}
                  onChange={(e) => setInputListEmail(e.target.value)}
                />
              </div>
            );
          })}

          <br />
          {inputListNumber.map((item, i) => {
            return (
              <div className="box" key={item.id}>
                <input
                  placeholder="Enter Number"
                  value={item.inputNumber}
                  onChange={(e) => setInputListNumber(e.target.value)}
                />
              </div>
            );
          })}

          <br />
          <button type="Submit"> Submit</button>
          <button>
            <Link className="textDecorationNone" to="/">
              Cancel
            </Link>
          </button>
        </form>*/
