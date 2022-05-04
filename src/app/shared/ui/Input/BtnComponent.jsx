import React from 'react';
import Button from '@mui/material/Button';

const BtnComponent = (props) => {
    const{text, onClick=null, type, color} = props
  return (
    <Button  type={'submit'}  color={color} onClick={onClick}>{text}</Button>
  )
}

export default BtnComponent