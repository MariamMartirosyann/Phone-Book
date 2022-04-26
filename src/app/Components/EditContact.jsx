import React,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contact = useSelector((state) => state);
  const currentContact = contact.find((contact)=>contact.id === parseInt(id));


  useEffect(()=>{
    if(currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number)
    }
  },[currentContact])


  return (
    <div>
      <Navbar />


      <div className='form'>

        <h1>Edit Contact {id}</h1>

        <form>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' /><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' /><br />
          <input type="phoneNumber" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Phone Number' /><br />
          <input type="Submit" placeholder='Update Contact' className='submit' /><br />
          <button>
            <Link className='textDecorationNone' to="/">Cancel</Link></button>
        </form>
      </div>
    </div>
  )
}

export default EditContact