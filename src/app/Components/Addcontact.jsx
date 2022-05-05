import React, { Fragment } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { addContact } from "../redux/ContactSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import InputField from "../shared/ui/Input";
import BtnComponent from "../shared/ui/Input/BtnComponent";


import Navbar from "./Navbar";


const emailDefaultValue = {
  id: Date.now(),
  value: "",
};
const numberDefaultValue = {
  id: Date.now(),
  value: "",
};

const AddContact = () => {
  const contacts = useSelector((state) => state.contact.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    watch,
    getValues,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: [emailDefaultValue],
      number: [numberDefaultValue],
    },
  });

  const emailFieldValue = useFieldArray({
    control,
    name: "email",
  });
  const numberFieldValue = useFieldArray({
    control,
    name: "number",
  });
  const onSubmit = (formData) => {
    const newFormData = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
    };
    console.log(newFormData);
    dispatch(addContact(newFormData));
    navigate("/");
  };
  const handleAddEmail = () => {
    emailFieldValue.append(emailDefaultValue);
  };
  const handleAddNumber = () => {
    numberFieldValue.append();
  };
  const handleRemoveEmail = (index) => {
    console.log(index);
    emailFieldValue.remove(index);
  };
  const handleRemoveNumber = () => {
    numberFieldValue.remove();
  };
 
  return (
    <div>
      <Navbar />
      <div className="form">
        <h1>Add Contact</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
          
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
            label={"Name"}
            helperText={"Enter your name"}
          />

          {errors?.name?.message && <p>{errors.name.message}</p>}

          <br />
          <Grid container className="inputGrid">
            <Grid item xs={6}>
              {emailFieldValue.fields?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <InputField
                      key={index}
                      control={control}
                      name={`email.${index}.value`}
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
                      label={"Email"}
                      helperText={"Enter your email"}
                    />
                    <br />
                    <br />
                    <br />

                    {errors?.email?.message && <p>{errors.email.message}</p>}
                    <br />

                    <BtnComponent onClick={() => handleRemoveEmail(index) }  text={" Delete"}/>
                  
                  </Fragment>
                );
              })}
              <br />

              <BtnComponent onClick={handleAddEmail} text={"Add Email"} ></BtnComponent>

              <br />
            </Grid>
            <Grid item xs={6}>
              {numberFieldValue.fields.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <InputField
                      key={index}
                      control={control}
                      name={`number.${index}.value`}
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
                      label={"Number"}
                      helperText={"Enter your number"}
                    />
                    <br />
                    <br />
                    <br />
                    <br />

                    <BtnComponent onClick={handleRemoveNumber} text={"Delete"} /> 
                    <br />
                  </Fragment>
                );
              })}
              
              <BtnComponent onClick={handleAddNumber} text={"Add Number"}/>
              <br />
            </Grid>
          </Grid>

          <BtnComponent type="submit" text={"Submit"}/>
        </form>
      </div>
    </div>
  );
};

export default AddContact;

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

          })}
          <Controller
                      key={index}
                      control={control}
                      name={`email.${index}.value`}
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
                     <Controller
                      control={control}
                      name={`number.${index}.value`}
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
                    <br />*/
