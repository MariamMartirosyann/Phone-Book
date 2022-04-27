import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    list: [
      {
        id: 0,
        name: "John Doe",
        email:"k@mail.ru",
        number: 149856541,
      },
      {
        id: 1,
        name: "Johna Smitgh",
        email:"m@mail.ru",
        number: 279856471,
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
      state.list = [...state.list, newContact];
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