import React, { useEffect, Fragment } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../redux/ContactSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import InputField from "../../shared/ui/Input";
import BtnComponent from "../../shared/ui/button";

const EditContact = () => {
  const { id } = useParams();

  const contacts = useSelector((state) => state.contact.list);
  const selectedContact = contacts.find((item) => item.id === id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
    watch,
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: [],
      number: [],
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
      id: id,
      name: formData.name,
      email: formData.email,
      number: formData.number,
    };
    console.log(newFormData);
    dispatch(updateContact(newFormData));
    navigate("/");
  };
  console.log(watch());
  const handleAddEmail = () => {
    emailFieldValue.append({ id: Date.now(), value: "" });
  };
  const handleAddNumber = () => {
    numberFieldValue.append({ id: Date.now(), value: "" });
  };
  const handleRemoveEmail = (index) => {
    emailFieldValue.remove(index);
  };
  const handleRemoveNumber = () => {
    numberFieldValue.remove();
  };

  useEffect(() => {
    if (selectedContact) {
      reset({
        name: selectedContact.name,
        email: selectedContact.email,
        number: selectedContact.number,
      });
    }
  }, [reset, selectedContact]);

  return (
    <div>
      <Navbar />
      <div className="form">
        <h1>Edit Contact {id}</h1>
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
          <br />
          {errors?.name?.message && <p>{errors.name.message}</p>}

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
                    <br />

                    <BtnComponent
                      onClick={() => handleRemoveEmail(index)}
                      text={" Delete"}
                    />
                  </Fragment>
                );
              })}
              <BtnComponent onClick={handleAddEmail} text={"Add Email"} />

              <br />
            </Grid>
            <Grid item xs={6}>
              {numberFieldValue.fields.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <InputField
                      control={control}
                      name={`number.${index}.value`}
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
                      label={"Number"}
                      helperText={"Enter your number"}
                    />
                    <br />
                    <br />
                    <br />
                    <br />

                    <BtnComponent
                      onClick={handleRemoveNumber}
                      text={" Delete"}
                    />
                  </Fragment>
                );
              })}

              <BtnComponent onClick={handleAddNumber} text={" Add Number"} />

              <br />
            </Grid>
          </Grid>
          <BtnComponent text={"submit"} type="submit" />
          <br />

          <BtnComponent text={" Cancel"}>
            {" "}
            <Link className="textDecorationNone" to="/"></Link>
          </BtnComponent>
          <br />
        </form>
      </div>
    </div>
  );
};

export default EditContact;
