import React from 'react';
import { deleteContact } from '../redux/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const Table = () => {
    const contact = useSelector((state) => state.contact);

    const dispatch = useDispatch();
    
    const handledeleteClick = (id) => {
        dispatch(deleteContact({ id: id }))
    }
    return (<>
        <h1 style={{ textAlign: 'center' }}>My Phone App</h1>
        <Grid Container className="tableArea">

            <table className='table'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone </th>
                    <th>Action</th>
                </tr>
                {contact ? contact.map(i =>
                    <tr key={i.id}>
                        <td>{i.id + 1}</td>
                        <td>{i.name}</td>
                        <td>{i.number}</td>
                        <td>
                            <button className='editBtn'> <Link to={`/editContact/${i.id}`} className="extDecorationNone">Edit</Link></button><br />
                            <button className='editBtn' type='button' onClick={handledeleteClick}>Delete</button></td>
                    </tr>) : null}


            </table>
        </Grid>
    </>
    )
}

export default Table