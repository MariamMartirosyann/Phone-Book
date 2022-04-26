import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const Addbtn = () => {
    return (
        <>
            <Grid container className='addContact'><button className='addBtn'><Link  className='textDecorationNone'to="/addContact">Add Contact</Link></button></Grid>
        </>
    )
}

export default Addbtn