import React from "react";
import { useForm, Controller } from "react-hook-form";
import { addContact } from "../redux/ContactSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

const AddContact = () => {
  const contacts = useSelector((state) => state.contact.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode:"all",
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });
  console.log(errors);

  const onSubmit = (formData) => {
    const newFormData = {
      name: formData.name,
      email:[{ id: Date.now(), inputEmail: formData.email }],
      number:[{ id: Date.now(), inputNumber: formData.number  }]
    }
    dispatch(addContact(newFormData));
    navigate("/");

  };
  return (
    
    <div>
      <Navbar />
      <div className="form">
        <h1>Add Contact</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">name</label>
          <Controller
            control={control}
            name="name"
            rules={{
              required:{
                value:true,
                message:"required",
            
              },
              minLength:{
                value:5,
                message:"Input more then 5 letters"
              }

            }}
            render={({ field }) => <input {...field}/>}
          />
        
        {errors?.name?.message &&  <p>{errors.name.message}</p>}
         
          <br />
          <label htmlFor="email">Email</label>
          <Controller
            control={control}
            name="email"
            rules={{
              required:{
                value:true,
                message:"required"
              },
              maxLength:{
                value:20,
                message:"Input less then 20 letters"
              },
              
            }}
            render={({ field }) => <input {...field}/>}
          />
          {errors?.email?.message &&  <p>{errors.email.message}</p>}
         
      
          <br />
          <label htmlFor="number">Number</label>
          <Controller
            control={control}

            name="number"
            rules={{
              required:{
                value:true,
                message:"required"
              },
              pattern:{
                value:/[1-9][0-9]*|0/g,
                message:"Enter only number"

              }
            }}
            render={({ field }) => <input {...field}/>}
          />
          {errors?.number?.message &&  <p>{errors.number.message}</p>}
          <br />
          <input type="submit" />
  
        
        </form>
      </div>
    </div>
  );
};

export default AddContact;

/* const contact = useSelector((state) => state.contact.list);
  const [inputListEmail, setInputListEmail] = useState([]);
  const [inputListNumber, setInputListNumber] = useState([]);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }
    const data = {
      name: name,
      number: inputListNumber,
      email: inputListEmail,
    };
    console.log(data);
    dispatch(
      addContact({
        name: name,
        number: inputListNumber,
        email: inputListEmail,
      }),
      navigate("/")
    );
  };

  const handleEmailInputChange = (e, itemId) => {
    const { value } = e.target;
    const newList = inputListEmail.map((item) => {
      if(item.id === itemId){
        return {
          id:itemId,
          inputEmail: value
        }
      }
      return item
    })
    setInputListEmail(newList);
  };
  
  const handleEmailRemoveClick = (itemId) => {
    const filteredList = inputListEmail.filter((item) => item.id !== itemId)
    setInputListEmail(filteredList);
  };

  const handleEmailInputAdd = () => {
    setInputListEmail([...inputListEmail, { id: Date.now(), inputEmail: "" }]);
  };

  const handleNumberInputChange = (e, itemId) => {
    const { value } = e.target;
    const newList = inputListNumber.map((item) => {
      if(item.id === itemId){
        return {
          id:itemId,
          inputNumber: value
        }
      }
      return item
    })
    setInputListNumber(newList);
  };

  const handleNumberRemoveClick = (itemId) => {
    const filteredList = inputListNumber.filter((item) => item.id !== itemId)
    setInputListNumber(filteredList);
  };


  const handleNumberInputAdd = () => {
    setInputListNumber([...inputListNumber, { id: Date.now(), inputNumber: "" }]);
  };

  const handleNameInputChange = (e) => setName(e.target.value)

  return (
    <div>
      <Navbar />

      <div className="form">
        <h1>Add Contact</h1>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={handleNameInputChange}
            type="text"
            placeholder="name"
          />

          {inputListEmail.map((item, i) => {
            return (
              <div key={item.id}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={item.inputEmail}
                  onChange={(e) => handleEmailInputChange(e, item.id)}
                />

                <div className="btn-box">
                  {inputListEmail.length !== 1 && (
                    <button onClick={() => handleEmailRemoveClick(item.id)}>
                      Remove
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          <br/>
          <button onClick={handleEmailInputAdd} type="button">Add email</button><br/>
          {inputListNumber.map((item, i) => {
            return (
              <div className="box" key={item.id}>
                <input
                  
                  placeholder="Enter Number"
                  value={item.inputNumber}
                  onChange={(e) => handleNumberInputChange(e, item.id)}
                />

                <div className="btn-box">
                  {inputListNumber.length !== 1 && (
                    <button onClick={() => handleNumberRemoveClick(item.id)}>
                      Remove
                    </button>
                  )}
                  
                </div>
              </div>
            );
          })}
         
          <button type="button" onClick={handleNumberInputAdd}>Add Number</button>
                  
          <br />

          <br />
          <button type="Submit">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>*/
  