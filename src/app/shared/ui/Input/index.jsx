import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Fragment } from "react";

const InputField = (props) => {
  const {
    control,
    rules = null,
    name = "name2",
    label,
    helperText,
    background,
    variant,
    errors,
    border,
  } = props;
  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            border={border}
            variant={variant}
            className="mainInput"
            id="demo-helper-text-aligned"
            label={label}
            helperText={helperText}
            background={background}
          />
        )}
      />
      {errors?.[name]?.message && <p>{errors[name].message}</p>}
    </Fragment>
  );
};

export default InputField;
/* <input {...field}*/
