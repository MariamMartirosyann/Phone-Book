
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { addContact } from "../redux/ContactSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";


const AddContact = () => {
  const contacts = useSelector((state) => state.contact.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });
  console.log(errors);

  const onSubmit = (formData) => {
    const newFormData = {
      name: formData.name,
      email: [{ id: Date.now(), inputEmail: formData.email }],
      number: [{ id: Date.now(), inputNumber: formData.number }]
    }
    dispatch(addContact(newFormData));
    navigate("/");

  };
  return (

    <div>
      <Navbar />
      <div className="form">
        <h1>Add Contact</h1>

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
                message: "Input more then 5 letters"
              }

            }}
            render={({ field }) => <input {...field} />}
          />

          {errors?.name?.message && <p>{errors.name.message}</p>}

          <br />

          <label htmlFor="email">Email</label>
          <Controller 
            control={control}
            name="email"
            rules={{
              required: {
                value: true,
                message: "required"
              },
              maxLength: {
                value: 20,
                message: "Input less then 20 letters"
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
                message: "required"
              },
              pattern: {
                value: /[1-9][0-9]*|0/g,
                message: "Enter only number"

              }
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors?.number?.message && <p>{errors.number.message}</p>}
          <br />
          <input type="submit" />


        </form>
      </div>
    </div>
  );
};

export default AddContact



/* {inputEmail?.email?.map((item, i) => {
            <Controller
            key={inputEmail.id}
              control={control}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: "required"
                },
                maxLength: {
                  value: 20,
                  message: "Input less then 20 letters"
                },

              }}
              render={({ field }) => <input {...field} />}
            />

          })}*/ 