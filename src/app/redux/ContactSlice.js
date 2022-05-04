import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    list: [
      {
        id: 1,
        name:"John Doe",
        email:[{id:1,value:"k@mail.ru"}],
        number: [{id:1,value:'2222222222'}],
      },
      {
        id: 2,
        name: "Johna Smitgh",
        email:[{id:2,value:"Johna@mail.ru"}],
        number:[{id:2,value:'1111111111'}],
      },
    ]
  },

  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: Date.now(),
        name: action.payload.name,
        number: action.payload.number,
        email: action.payload.email,
      };
      console.log(newContact,"newContact");
      state.list = [...state.list, newContact];
      console.log(state.list);
    },
    updateContact: (state, action) => {
      const newState = state.list.map((item) => {
        if (Number(action.payload.id) === item.id) {
          return action.payload;
        };
        return item;
      })
      state.list = newState;
    },
    deleteContact: (state, action) => {
      state.list =  [...state.list.filter((contact) => contact.id !== action.payload.id)];
    },
  },
});
export const { addContact, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;