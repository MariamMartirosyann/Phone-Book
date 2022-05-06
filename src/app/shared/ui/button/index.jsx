import React from "react";
import Button from "@mui/material/Button";

const BtnComponent = (props) => {
  const {
    text,
    onClick = null,
    type = "button",
    width,
    variant = "outlined",
  } = props;
  return (
    <Button
      type={type}
      variant={variant}
      color={"primary"}
      width={width}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default BtnComponent;
