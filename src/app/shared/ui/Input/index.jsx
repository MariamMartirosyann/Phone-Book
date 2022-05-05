import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  const {
    control,
    rules = null,
    name = "name2",
    label,
    helperText,
    background,
    variant,
    border,
    color="primary",
  } = props;
  return (
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
  );
};

export default InputField;
/* <input {...field}*/
