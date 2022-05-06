import React, { Fragment } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { addContact } from "../../redux/ContactSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import InputField from "../../shared/ui/Input";
import BtnComponent from "../../shared/ui/button";
import { nanoid } from "nanoid";
import Navbar from "../../shared/components/Navbar";

const emailDefaultValue = {
  id: nanoid(),
  value: "",
};
const numberDefaultValue = {
  id: nanoid(),
  value: "",
};

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: [emailDefaultValue],
      number: [numberDefaultValue],
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods;

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
    dispatch(addContact(newFormData));
    navigate("/");
  };

  const handleAddEmail = () => {
    emailFieldValue.append(emailDefaultValue);
  };

  const handleAddNumber = () => {
    numberFieldValue.append(numberDefaultValue);
  };

  const handleRemoveEmail = (index) => {
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
            errors={errors}
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

                    <BtnComponent
                      onClick={() => handleRemoveEmail(index)}
                      text={" Delete"}
                    />
                  </Fragment>
                );
              })}
              <br />

              <BtnComponent
                onClick={handleAddEmail}
                text={"Add Email"}
              ></BtnComponent>

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

                    <BtnComponent
                      onClick={handleRemoveNumber}
                      text={"Delete"}
                    />
                    <br />
                  </Fragment>
                );
              })}

              <BtnComponent onClick={handleAddNumber} text={"Add Number"} />
              <br />
            </Grid>
          </Grid>

          <BtnComponent type="submit" text={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
